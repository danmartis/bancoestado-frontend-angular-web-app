package com.bancoestado.javaee.propiedades;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.apache.log4j.Logger;

public class DatosSistema {
	private static final String DESARROLLO = "desarrollo";
	private static final String NODE_ENV = "NODE_ENV";
	private static final Logger LOGGER = Logger.getLogger(DatosSistema.class);
	public static final String ARCHIVO_PROPIEDADES = "homeappTest.properties";
	public static final String ARCHIVO_PROPIEDADES_QA = "homeappQA.properties";
	private static Properties properties;

	static {

		InputStream input;

		try {
			LOGGER.info("Obtener Propiedades - init");
			properties = new Properties();
			ClassLoader loader = Thread.currentThread().getContextClassLoader();
			String env = System.getenv(NODE_ENV);
			if (env == null || DESARROLLO.equals(env)) {
				input = loader.getResourceAsStream(ARCHIVO_PROPIEDADES);
			} else {
				input = loader.getResourceAsStream(ARCHIVO_PROPIEDADES_QA);
			}
				
			properties.load(input);

			LOGGER.info("Cargar Propiedades - end");
		} catch (FileNotFoundException e) {
			throw new RuntimeException("Excepcion seguros- Archivo " + ARCHIVO_PROPIEDADES + " no encontrado.", e);
		} catch (IOException e) {
			throw new RuntimeException("Excepcion seguros- Archivo " + ARCHIVO_PROPIEDADES + " no pudo ser cargado.", e);
		}
	}

	public static String getDatoProperties(String value) {
		// LOGGER.info("Obtener Propiedades - end");
		return properties.getProperty(value);
	}

	public static Integer getDatoPropertiesInt(String value) {
		// LOGGER.info("Obtener Propiedades - end");
		return Integer.parseInt(properties.getProperty(value));
	}

	public static String getTarjetaCoordenadas(String llaveTarjeta, String coordenada) throws Exception {
		String value = llaveTarjeta;
		// String value =
		// "A1:27;A2:34;A3:06;A4:88;A5:68;B1:05;B2:64;B3:90;B4:47;B5:94;C1:44;C2:93;C3:65;C4:36;C5:60;D1:25;D2:54;D3:64;D4:06;D5:52;E1:01;E2:16;E3:66;E4:61;E5:58;F1:75;F2:03;F3:02;F4:78;F5:09;G1:89;G2:78;G3:84;G4:27;G5:07;H1:76;H2:04;H3:07;H4:05;H5:65;I1:32;I2:47;I3:54;I4:82;I5:86;J1:76;J2:27;J3:32;J4:70;J5:31";
		if (value == null) {
			throw new Exception("Properties de Tarjeta de coordenadas mal cargada llave:" + llaveTarjeta);
		}
		Map<String, String> map = new HashMap<String, String>();
		String arr1[] = value.split(";");
		if (arr1.length != 50) {
			throw new Exception("Properties de Tarjeta de coordenadas mal cargada, validacion largo");
		}
		for (String string : arr1) {
			String arr2[] = string.split(":");
			String key1 = arr2[0];
			String value1 = arr2[1];
			map.put(key1, value1);
		}

		String v = map.get(coordenada);
		if (v == null) {
			throw new Exception("Properties de Tarjeta de coordenadas mal cargada");
		}
		return v;
	}

	// public static void main(String[] args) {
	// try {
	// String v = getTarjetaCoordenadas("", "D4");
	// //System.out.println(v);
	// } catch (Exception e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// }
}
