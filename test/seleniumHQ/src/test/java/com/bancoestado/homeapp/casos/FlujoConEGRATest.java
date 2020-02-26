package com.bancoestado.homeapp.casos;

import static org.junit.Assert.assertEquals;

import java.io.IOException;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;

import com.bancoestado.homeapp.abs.AbsTest;
import com.bancoestado.javaee.propiedades.DatosSistema;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class FlujoConEGRATest extends AbsTest {
	
	private static final Logger logger = LogManager.getLogger(FlujoConEGRATest.class);
	public static int cont;
	String urlBase = DatosSistema.getDatoProperties("url");
	/*
	rut = DatosSistema.getDatoProperties("rutCliente"),
	clave = DatosSistema.getDatoProperties("claveCliente"),
	telefono = DatosSistema.getDatoProperties("fonoCliente"),
	correo = DatosSistema.getDatoProperties("correoCliente"),
	varPlan;
	int ciclo = 0;
	*/
	
	@Test
	public void A1_Carga_Home(){
		try {
			logger.info("Inicio bloque Home");
			driver.get(urlBase);
			waitSleep(5);
			String fotocap = "Pant_Home_Term_";
			cont=1;
			capturarPantalla(driver, fotocap + cont);			
		}catch(Exception e){
			logger.error("Error A1_Carga_Home", e);
		}
	}
	
}

