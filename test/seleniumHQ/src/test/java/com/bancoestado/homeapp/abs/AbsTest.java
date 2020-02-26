package com.bancoestado.homeapp.abs;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.bancoestado.javaee.propiedades.DatosSistema;

public class AbsTest {

	private static final Logger LOGGER = Logger.getLogger(AbsTest.class);
	private static final String EXTENSION_IMAGEN = ".png";

	protected WebDriver driver;
	protected String baseUrl;
	protected String urlBase;
	protected String rut,clave;
	protected String parameterUrl;
	protected boolean acceptNextAlert = true;
	protected StringBuffer verificationErrors = new StringBuffer();
	String scrollUp;

	@Before
	public void setUp() throws Exception {
		LOGGER.info("INICIANDO @BEFORE setUp():" + this.getClass().getName());

		String operationSystem = System.getProperty("os.name").toLowerCase();
		if (operationSystem.indexOf("win") >= 0) {
			LOGGER.info("setUp():ES WINDOWS");
			// System.setProperty("phantomjs.binary.path",
			// "./src/main/resources/Runners/phantomjs_Windows.exe");
			// DesiredCapabilities caps = new DesiredCapabilities();
			// caps.setJavascriptEnabled(true);
			// caps.setCapability("takesScreenshot", true);
			// caps.setCapability("phantomjs.cli.args",
			// new String[] { "--web-security=false", "--ignore-ssl-errors=true" });
			// driver = new PhantomJSDriver(caps);
			System.setProperty("webdriver.chrome.driver", "./src/main/resources/Runners/chromedriver.exe");
			
			//Codigo que maximiza la pantalla y emula un dispositivo celular
			ChromeOptions options = new ChromeOptions();
			options.addArguments("--start-maximized");
			
			Map<String, String> mobileEmulation = new HashMap<String, String>();
			mobileEmulation.put("deviceName", "Nexus 5");

			//options.setExperimentalOption("mobileEmulation", mobileEmulation);
			driver = new ChromeDriver(options);
			driver.manage().window().setSize(new Dimension(412, 732));
			
			LOGGER.info("driver Chrome:" + driver);
			baseUrl = DatosSistema.getDatoProperties("url");
			urlBase = DatosSistema.getDatoProperties("url");
			driver.manage().timeouts().implicitlyWait(DatosSistema.getDatoPropertiesInt("timeOut"), TimeUnit.SECONDS);
		} else if (operationSystem.indexOf("nix") >= 0 || operationSystem.indexOf("nux") >= 0
				|| operationSystem.indexOf("aix") > 0) {
			LOGGER.info("setUp():ES LINUX");
			System.setProperty("phantomjs.binary.path", "./src/main/resources/Runners/phantomjs_Linux64");
			DesiredCapabilities caps = new DesiredCapabilities();
			caps.setJavascriptEnabled(true);
			caps.setCapability("takesScreenshot", true);
			caps.setCapability("phantomjs.cli.args",
					new String[] { "--web-security=false", "--ignore-ssl-errors=true" });
			driver = new PhantomJSDriver(caps);

			baseUrl = DatosSistema.getDatoProperties("url");
			urlBase = DatosSistema.getDatoProperties("url");
			driver.manage().timeouts().implicitlyWait(DatosSistema.getDatoPropertiesInt("timeOut"), TimeUnit.SECONDS);
		} else {
			throw new Exception("Error al setear el Sistema operativo");
		}
		parameterUrl = "";
		if (parameterUrl == null) {
			throw new Exception("token no recibido");
		}
	}

	private WebDriver ChromeDriver(ChromeOptions chromeOptions_M) {
		// TODO Auto-generated method stub
		return null;
	}

	@After
	public void tearDown() throws Exception {

		// LOGGER.info("INICIANDO @AFTER tearDown():" + this.getClass().getName());
		driver.quit();
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
	}

	protected String getValueFromInput(WebElement element) {
		return element.getAttribute("value");
	}

	protected boolean isElementPresent(By by) {
		try {
			driver.findElement(by);
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	protected boolean isAlertPresent() {
		try {
			driver.switchTo().alert();
			return true;
		} catch (NoAlertPresentException e) {
			return false;
		}
	}


	protected void waitSleep(int second) {
		// LOGGER.info("INICIO -----> ESPERA:" + second + " / SEGUNDOS");
		long millis = second * 1000;
		try {
			Thread.sleep(millis);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		// LOGGER.info("FIN -----> ESPERA:" + second + " / SEGUNDOS");
	}

	//protected void capturarPantalla(WebDriver driver, String nombreImagen) throws IOException {
		// LOGGER.info("Captura de pantalla URL: " + driver.getCurrentUrl() + " - Nombre
		// imagen: " + nombreImagen
		// + EXTENSION_IMAGEN);
		
		//File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		//FileUtils.copyFile(scrFile, new File("./screenshots/" + nombreImagen + EXTENSION_IMAGEN));
		
		
		Calendar calendario = new GregorianCalendar();
		protected int hora = calendario.get(Calendar.HOUR_OF_DAY);
		private WebElement scrollUp2;
		
	//}
	

	// Compara texto primer texto corresponde a UTF
	protected void compara(String texto1, String texto2) {
		try {
			// String textoUTF = cambiaTexto(texto1);
			// assertEquals(textoUTF, texto2);
			assertEquals(texto1, texto2);
		} catch (Exception e) {
			LOGGER.error("compara(), exception,", e);
		}

	}

	// cambia texto UTF8
	protected String cambiaTexto(String stringUTF) throws Exception {
		String operationSystem = System.getProperty("os.name").toLowerCase();
		LOGGER.info("cambiaTexto(), ES:" + operationSystem);
		if (operationSystem.indexOf("nix") >= 0 || operationSystem.indexOf("nux") >= 0
				|| operationSystem.indexOf("aix") > 0) {
			if (stringUTF == null) {
				LOGGER.error("cambiaTexto(), entrada es nula");
				throw new Exception("String es nulo");
			}
			try {
				LOGGER.info("cambiaTexto(), entrada:" + stringUTF);
				return new String(stringUTF.getBytes("ISO-8859-1"), "UTF-8");
			} catch (UnsupportedEncodingException e) {
				LOGGER.error("cambiaTexto(), excepcion", e);
				e.printStackTrace();
				throw e;
			}
		} else {
			LOGGER.info("cambiaTexto(), retorna:" + stringUTF);
			return stringUTF;
		}
	}

	protected void loginInt(String rut, String clave, String foto) throws IOException {
		driver.get(baseUrl + "/apps/bt" + parameterUrl);
		waitSleep(3);
		capturarPantalla(driver, foto + ".1");
		driver.findElement(By.id("tabInternetLI")).click();
		driver.findElement(By.id("rutIn")).clear();
		driver.findElement(By.id("rutIn")).sendKeys(DatosSistema.getDatoProperties(rut));
		driver.findElement(By.id("passwordInternet")).clear();
		driver.findElement(By.id("passwordInternet")).sendKeys(DatosSistema.getDatoProperties(clave));
		capturarPantalla(driver, foto + ".2");
		driver.findElement(By.id("btn__ingresar")).click();
		waitSleep(7);
	}

	protected void loginAtm(String rut, String clave, String foto) throws IOException {
		driver.get(baseUrl);
		waitSleep(1);
		capturarPantalla(driver, foto + ".1");
		driver.findElement(By.id("rutIn")).clear();
		driver.findElement(By.id("rutIn")).sendKeys(DatosSistema.getDatoProperties(rut));
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("password")).sendKeys(DatosSistema.getDatoProperties(clave));
		capturarPantalla(driver, foto + ".2");
		driver.findElement(By.id("btn__ingresar")).click();
		waitSleep(7);
	}

	protected void ingresotarjetacoordenadas(String llavetc, String foto) throws IOException {
		capturarPantalla(driver, foto + ".3");
		// Obtengo y valido CC
		String tc1 = new String();
		String tc2 = new String();
		String tc3 = new String();
		String cc1, cc2, cc3;
		// System.out.println("Se crean variables");
		tc1 = driver.findElement(By.id("ntc1")).getText();
		tc2 = driver.findElement(By.id("ntc2")).getText();
		tc3 = driver.findElement(By.id("ntc3")).getText();
		try {
			cc1 = DatosSistema.getTarjetaCoordenadas(DatosSistema.getDatoProperties(llavetc), tc1);
			cc2 = DatosSistema.getTarjetaCoordenadas(DatosSistema.getDatoProperties(llavetc), tc2);
			cc3 = DatosSistema.getTarjetaCoordenadas(DatosSistema.getDatoProperties(llavetc), tc3);
			driver.findElement(By.id("c1")).sendKeys(cc1);
			driver.findElement(By.id("c2")).sendKeys(cc2);
			driver.findElement(By.id("c3")).sendKeys(cc3);
			driver.findElement(By.xpath("/html/body/div[1]/div[3]/p/button[1]")).click();
		} catch (Exception e) {
			// TODO: handle exception
		}

		waitSleep(3);
	}
	
	public void scroll() throws IOException {
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		Calendar calendario = new GregorianCalendar();
		int hora = calendario.get(Calendar.HOUR_OF_DAY);
		capturarPantalla(driver, "scroll " + hora);
	}
	
	public void scroll_u() throws IOException {
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0, -document.body.scrollHeight)");
	}
		
	public void scroll_gerardo() throws IOException {
		scrollUp2 = null;
		scrollUp2.sendKeys(Keys.PAGE_DOWN);
        scrollUp2.sendKeys(Keys.PAGE_DOWN);
        scrollUp2.sendKeys(Keys.PAGE_DOWN);
        scrollUp2.sendKeys(Keys.PAGE_DOWN);
        scrollUp2.sendKeys(Keys.PAGE_DOWN);

	}
	
	public void scroll_down() throws IOException {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("scroll(0, document.body.scrollHeight);");
	}

	public void scroll_up() throws IOException {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("scroll(0, -250);");

	}
	
	public void scroll_left(String xpath) {
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("document.getElementByXpath('"+xpath+"').scrollLeft+=300", "");
	}
	
	protected void capturarPantalla(WebDriver driver, String nombreImagen) throws IOException {
		DateFormat hora = new SimpleDateFormat("dd-MM-yyyy HHmmss");
		Date date= new Date();
		LOGGER.info("Captura de pantalla URL: " + driver.getCurrentUrl() + " - Nombre imagen: " + nombreImagen
				+ EXTENSION_IMAGEN + hora.format(date));
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("./screenshots/" + nombreImagen + EXTENSION_IMAGEN));
	}

		//protected void capturarPantalla(WebDriver driver, String nombreImagen) throws IOException {
		//	DateFormat hora = new SimpleDateFormat("dd-MM-yyyy HHmmss");
		//	Date date= new Date();
		//	LOGGER.info("Captura de pantalla URL: " + driver.getCurrentUrl() + " - Nombre imagen: " + nombreImagen
		//			+ EXTENSION_IMAGEN + hora.format(date));
		//	File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		//	FileUtils.copyFile(scrFile, new File("./screenshots/" + nombreImagen + EXTENSION_IMAGEN));
		//}
		

}
