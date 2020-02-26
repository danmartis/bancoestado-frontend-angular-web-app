package com.bancoestado.javaee.propiedades;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.log4j.Logger;

@Deprecated
public class DatosNegocio {

	private static final Logger LOGGER = Logger.getLogger(DatosNegocio.class);
	public static final String ARCHIVO_PROPIEDADES = "homeappTest.properties";

	public static final String RUT_CLIENTE;
	public static final String CONTRASENA;
	public static final String NUMERO_CUENTA_CORRIENTE;
	public static final String DESTINATARIO1;

	static {

		InputStream input;
		Properties properties;

		try {
			LOGGER.info("Obtener Propiedades - init");
			properties = new Properties();
			ClassLoader loader = Thread.currentThread().getContextClassLoader();
			input = loader.getResourceAsStream(ARCHIVO_PROPIEDADES);
			properties.load(input);

			RUT_CLIENTE = properties.getProperty("rutCliente");
			LOGGER.info("RUT_CLIENTE: " + RUT_CLIENTE);

			CONTRASENA = properties.getProperty("contrasena");
			LOGGER.info("CONTRASENA: " + CONTRASENA);

			NUMERO_CUENTA_CORRIENTE = properties.getProperty("numeroCuentaCorriente");
			LOGGER.info("NUMERO_CUENTA_CORRIENTE: " + NUMERO_CUENTA_CORRIENTE);

			DESTINATARIO1 = properties.getProperty("destinatario1");
			LOGGER.info("DESTINATARIO1: " + DESTINATARIO1);

			LOGGER.info("Obtener Propiedades - end");
		} catch (FileNotFoundException e) {
			throw new RuntimeException("Excepcion EMT- Archivo " + ARCHIVO_PROPIEDADES + " no encontrado.", e);
		} catch (IOException e) {
			throw new RuntimeException("Excepcion EMT- Archivo " + ARCHIVO_PROPIEDADES + " no pudo ser cargado.", e);
		}
	}
}
