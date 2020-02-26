package com.bancoestado.homeapp.casos;

import java.io.IOException;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.bancoestado.homeapp.abs.AbsTest;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class FlujoHomeTarjeteroCuentas extends AbsTest {

	private static final Logger logger = LogManager.getLogger(FlujoHomeTarjeteroCuentas.class);
	public static int cont, ciclo = 1;
	boolean varelemento;
	String fotocap;
	
	// String urlBase = DatosSistema.getDatoProperties("urlConEGRA")

	public void A1_Carga_Home() {
		try {
			logger.info("Inicio bloque Home");
			driver.get(urlBase);
			waitSleep(5);
			String fotocap = "Pant_Home_CTAS_";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
		} catch (Exception e) {
			logger.error("Error A1_Carga_Home", e);
		}
	}

	@Test
	public void B1_Boton_Cotizar() {
		try {
			A1_Carga_Home();
			waitSleep(5);
			InfoCliente();
			CantidadTarjetas();
			UltimosMovimientos();
			CantidadTarjetasTCR();
			CantidadTarjetasAhorro();
			CarruselPublicidad();
			Productos();
			Transferir();
			Pagar();
			BotonMas();

		} catch (Exception e) {
			logger.error("Error B1_Home_Tarjeta", e);
		}
	}
	
	public void InfoCliente() {
		try {
			logger.info("Información Cliente");
			driver.findElement(By.xpath("/html/body/app-root/app-home/app-perfil/div/div/img")).click();
			waitSleep(3);
			fotocap = "Pant_Home_InfoCliente";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Header botón atrás mi perfil");
			driver.findElement(By.xpath("/html/body/app-root/app-perfil-cliente/div/div/app-header/div/div[1]")).click();
			waitSleep(5);

			logger.info("Header botón atrás mi perfil");
			driver.findElement(By.xpath("/html/body/app-root/app-mas/div/app-header/div/div[1]")).click();
			waitSleep(5);
			
		} catch (Exception e) {
			logger.error("Error B1_Home_Información_Cliente", e);
		}
	}

	public void CantidadTarjetas() throws IOException {
		String cuentasXpath="/html/body/app-root/app-home/app-body/div/carrousel-cuentas/swiper/div/div[1]/div";
		fotocap = "Pant_Home_CTAS_";
		
		try {
			List<WebElement> listaCuentas = driver.findElements(By.xpath(cuentasXpath)); 
			if(!listaCuentas.isEmpty()) {
				for(int i = 0; i < (listaCuentas.size()-1); i++) {
					swipeLeft(listaCuentas.get(i));
					waitSleep(1);
					cont = cont + 1;
					capturarPantalla(driver, fotocap + cont);
				}
				
				for(int i= listaCuentas.size(); i>1;i--) {
					swipeRight(listaCuentas.get(i-1));
					waitSleep(1);
				}
				
			}
		} catch (Exception e) {
			System.out.println("error al capturar pantalla");
		}
	}
	
	
	
	public void UltimosMovimientos() throws IOException {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		try {
			logger.info("Desplegar Últimos Movimientos");
			driver.findElement(By.xpath(
					"/html/body/app-root/app-home/app-body/div/carrousel-cuentas/swiper/div/div[1]/div[1]/div/div[2]/div[1]"))
					.click();
			waitSleep(5);
			fotocap = "Pant_Home_UltMov";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Pant_Detalle_ScrollDown");
			js.executeScript("window.scrollBy(0,100)");
			waitSleep(5);

			logger.info("Ver Otros Movimientos");
			driver.findElement(By.xpath("/html/body/app-root/app-home/app-body/div/carrousel-cuentas/swiper/div/div[1]/div[1]/div/div[2]/div[2]/div/button")).click();
			waitSleep(5);
			fotocap = "Pant_Home_DetalleCuentas";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Pant_Detalle_ScrollDown");
			scroll_down();
			waitSleep(5);
			
			logger.info("Pant_Detalle_ScrollUp");
			scroll_up();
			waitSleep(5);
			
			logger.info("DetalleCuentas_Desplegar_BotonFlotante");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-cuenta-resumen/div/app-boton-flotante/div/button")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Abrir_BotonFlotante";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("DetalleCuentas_Cerrar_BotonFlotante");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-cuenta-resumen/div/app-boton-flotante/div/button")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Cerrar_BotonFlotante";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("DetalleMovimientos");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-ultimos-movimientos-resumen/div[2]/div[1]")).click();
			waitSleep(5);
			fotocap = "Pant_Home_DetalleMovimientos";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("DetalleMovimiento_Botón_Volver");
			driver.findElement(By.xpath("/html/body/app-root/app-comprobante/div[2]/div[2]/button")).click();
			waitSleep(5);

			logger.info("Header Botón Atrás");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-header/div/div[1]")).click();
			waitSleep(5);
			
			
		} catch (Exception e) {
			logger.error("Error B1_Home_UltimosMovimientos", e);
		}

	}
	
	public void CantidadTarjetasTCR() throws IOException {
		String cuentasXpath="/html/body/app-root/app-home/app-body/div/bht-carousel/swiper/div/div[1]/div";
		fotocap = "Pant_Home_CtasTCR_";
		JavascriptExecutor js = (JavascriptExecutor) driver;
		
		try {
			logger.info("Pant_Detalle_ScrollDown");
			js.executeScript("window.scrollBy(0,100)");
			waitSleep(5);
			
			List<WebElement> listaCuentas = driver.findElements(By.xpath(cuentasXpath)); 
			if(!listaCuentas.isEmpty()) {
				for(int i = 0; i < (listaCuentas.size()-1); i++) {
					swipeLeft(listaCuentas.get(i));
					waitSleep(1);
					cont = cont + 1;
					capturarPantalla(driver, fotocap + cont);
				}
				
				for(int i= listaCuentas.size(); i>1;i--) {
					swipeRight(listaCuentas.get(i-1));
					waitSleep(1);
				}
				
			}
		} catch (Exception e) {
			System.out.println("error al capturar pantalla");
		}
		
		logger.info("ResumenMovimientosTCR");
		driver.findElement(By.xpath("/html/body/app-root/app-home/app-body/div/bht-carousel/swiper/div/div[1]/div")).click();
		waitSleep(5);
		fotocap = "Pant_Home_DetalleTCR_Nacional";
		cont = 1;
		capturarPantalla(driver, fotocap + cont);
		
		logger.info("ResumenMovimientosTCR");
		driver.findElement(By.xpath("/html/body/app-root/app-tc-detalle/bech-product-detail/div/div/div/app-sumary/tabset/section/ul/li[2]")).click();
		waitSleep(5);
		fotocap = "Pant_Home_DetalleTCR_Internacional";
		cont = 1;
		capturarPantalla(driver, fotocap + cont);
		
		logger.info("Header Botón Atrás");
		driver.findElement(By.xpath("/html/body/app-root/app-tc-detalle/app-header/div/div[1]")).click();
		waitSleep(5);
		
	}
	
	public void CantidadTarjetasAhorro() throws IOException {
		String cuentasXpath="/html/body/app-root/app-home/app-body/div/bhca-carousel/swiper/div/div[1]/div";
		fotocap = "Pant_Home_CtasAhorro_";
		JavascriptExecutor js = (JavascriptExecutor) driver;
		
		try {
			logger.info("Pant_Detalle_ScrollDown");
			js.executeScript("window.scrollBy(0,300)");
			waitSleep(5);
			
			List<WebElement> listaCuentas = driver.findElements(By.xpath(cuentasXpath)); 
			if(!listaCuentas.isEmpty()) {
				for(int i = 0; i < (listaCuentas.size()-1); i++) {
					swipeLeft(listaCuentas.get(i));
					waitSleep(1);
					cont = cont + 1;
					capturarPantalla(driver, fotocap + cont);
				}
				
				for(int i= listaCuentas.size(); i>1;i--) {
					swipeRight(listaCuentas.get(i-1));
					waitSleep(1);
				}
				
			}
		} catch (Exception e) {
			System.out.println("error al capturar pantalla");
		}
		
		logger.info("Detalle Ahorro");
		driver.findElement(By.xpath("/html/body/app-root/app-home/app-body/div/bhca-carousel/swiper/div/div[1]/div")).click();
		waitSleep(5);
		fotocap = "Pant_Home_DetalleAhorro_";
		cont = 1;
		capturarPantalla(driver, fotocap + cont);
		
		logger.info("Header Botón Atrás");
		driver.findElement(By.xpath("/html/body/app-root/app-tc-detalle/app-header/div/div[1]")).click();
		waitSleep(5);
		
	}
	
	
	
	private void swipeLeft(WebElement elementoVisible) {
		Actions mover= new Actions(driver);
		mover.moveToElement(elementoVisible).clickAndHold().moveByOffset(-250, 0).release().perform();
	}

	private void swipeRight(WebElement elementoVisible) {
		Actions mover= new Actions(driver);
		mover.moveToElement(elementoVisible).clickAndHold().moveByOffset(300, 0).release().perform();
	}

	public void Productos() throws IOException {
		try {
			logger.info("Footer Productos");
			driver.findElement(By.xpath("//*[@id=\"footer_productos\"]")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Productos";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Pant_Detalle_ScrollDown");
			scroll_down();
			waitSleep(5);

			
			logger.info("Pant_Detalle_ScrollUp");
			scroll_up();
			waitSleep(5);
			
			
			logger.info("Productos_Cuenta");
			driver.findElement(By.xpath("/html/body/app-root/app-productos/div/div[2]/div[2]/div[1]")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Productos_Cuenta";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Boton_Flotante_Abrir");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-cuenta-resumen/div/app-boton-flotante/div/button")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Boton_Flotante";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Boton_Flotante_Cerrar");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-cuenta-resumen/div/app-boton-flotante/div/button")).click();
			waitSleep(5);
			fotocap = "Pant_Home_Boton_Flotante";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Header botón atrás");
			driver.findElement(By.xpath("/html/body/app-root/app-cuentas-detalle/app-header/div/div[1]")).click();
			waitSleep(5);

		} catch (Exception e) {
			logger.error("Error B1_Home_Productos", e);
		}

	}
	
	private void Transferir() throws IOException {
		try {
			logger.info("Footer Transferir");
			driver.findElement(By.xpath("//*[@id=\"footer_tef\"]")).click();
			waitSleep(3);
			fotocap = "Pant_Home_Transferir";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Header botón atrás");
			driver.findElement(By.xpath("/html/body/app-root/app-menu-tef/app-header/div/div[1]")).click();
			waitSleep(5);
			
			
		} catch (Exception e) {
			logger.error("Error B1_Home_Transferir", e);
		}

	}
	
	private void Pagar() throws IOException {
		try {
			logger.info("Footer Pagar");
			driver.findElement(By.xpath("//*[@id=\"footer_pagos\"]")).click();
			waitSleep(3);
			fotocap = "Pant_Home_Pagar";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Header botón atrás");
			driver.findElement(By.xpath("/html/body/app-root/app-pago-servicios/app-header/div/div[1]")).click();
			waitSleep(5);
			
			
		} catch (Exception e) {
			logger.error("Error B1_Home_Pagar", e);
		}

	}
	
	private void CarruselPublicidad() throws IOException {
		logger.info("Pant_Detalle_ScrollDown");
		scroll_down();
		waitSleep(3);
		
		String cuentasXpath="/html/body/app-root/app-home/app-body/div/app-tarjetas-publicidad/swiper/div/div[1]/div";
		fotocap = "Pant_Home_Publicidad_";
		
		try {
			List<WebElement> listaCuentas = driver.findElements(By.xpath(cuentasXpath)); 
			if(!listaCuentas.isEmpty()) {
				for(int i = 0; i < (listaCuentas.size()-1); i++) {
					swipeLeft(listaCuentas.get(i));
					waitSleep(1);
					cont = cont + 1;
					capturarPantalla(driver, fotocap + cont);
				}
				
				for(int i= listaCuentas.size(); i>1;i--) {
					swipeRight(listaCuentas.get(i-1));
					waitSleep(1);
				}
				
			}
		} catch (Exception e) {
			System.out.println("error al capturar pantalla");
		}
	}
	
	private void BotonMas() throws IOException {
		try {
			logger.info("Footer Boton_Mas");
			driver.findElement(By.xpath("//*[@id=\"footer_mas\"]")).click();
			waitSleep(3);
			fotocap = "Pant_Home_Boton_Mas";
			cont = 1;
			capturarPantalla(driver, fotocap + cont);
			
			logger.info("Header botón atrás");
			driver.findElement(By.xpath("/html/body/app-root/app-mas/div/app-header/div/div[1]")).click();
			waitSleep(5);
			
			
		} catch (Exception e) {
			logger.error("Error B1_Home_Boton_Mas", e);
		}

	}
}
