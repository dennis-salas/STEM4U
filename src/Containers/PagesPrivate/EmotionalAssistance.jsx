import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Header from "../../Components/Header";

const EmotionalAssistance = () => {
  return (
    <div>
      <Header />
      <h1>Asistencia emocional</h1>
      <Container className="forum">
        <h3>Foro</h3>
      </Container>
      <Container className="motivacion">
        <h3>Motivación y Inteligencia Emocional</h3>
        <Row>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>Sinopsis:</h4>
                <p>
                  Básicamente, nuestro carácter está compuesto por nuestros
                  hábitos. Los hábitos son factores poderosos en nuestras vidas.
                  Dado que son pautas consistentes, a menudo inconscientes, de
                  modo constante y cotidiano expresan nuestro carácter y generan
                  nuestra efectividad… o inefectividad. Según dijo alguna vez el
                  gran educador Horace Mann: “Los hábitos son como hebras. Si
                  día tras día las trenzamos en una cuerda, pronto resultará
                  irrompible”.
                </p>
              </figcaption>
            </figure>
          </Col>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </Col>
          <Col xs={6} md={4}>
            <figure class="effect-marley">
              <img src="https://res.cloudinary.com/academia/image/upload/v1628516984/habitos-gente-efectiva-default_tkzlfx.jpg" />
              <figcaption>
                <h4>sweet marley</h4>
                <p>Marley tried to convince her but she was not interested.</p>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
     
      <div>
        <Container className="my-2">
          <h3 className="text-center">¿Cómo conseguir motivarnos?</h3>
          <p className="text-center">
            <em>A continuación te daremos 10 estrategias para motivarte</em>
          </p>
          <hr />
        </Container>
            <Container className="my-2">
              <Container>
                <h4 className="text-center-appHome">
                  <strong>1. Piensa en positivo</strong>
                </h4>
                <p className="text-parrafo">
                  Ten en cuenta que tus pensamientos van a influir decisivamente
                  en cómo afrontar cada paso que das. Si afrontas el día a día
                  con una visión positiva de las cosas, serás capaz de avanzar
                  hacia tus metas. Si, por el contrario, eres una persona
                  negativa a la que todo le parece imposible, no harás nada para
                  mejorar Nunca subestimes el poder que tiene el pensamiento
                  positivo cuando estás tratando de motivarte.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>
                    2. Elabora un diario personal que refleje tus progresos
                  </strong>
                </h4>
                <p className="text-parrafo">
                  Si eres una persona poco metódica, este truco puede resultarte
                  muy útil. Una de las claves para motivarnos a lograr un
                  objetivo es tomar conciencia de los progresos que vamos dando
                  en el corto plazo. Así, percibimos que nuestros esfuerzos
                  están dando sus frutos y por tanto es más probable que sigamos
                  adelante. Es bueno fragmentar tu trabajo en distintas
                  mini-metas que supongan un aliciente para seguir batallando.
                
                    Si te gusta escribir, una buena manera de controlar tus
                    progresos es redactar un pequeño diario en que expliques qué
                    has hecho durante el día y cuáles han sido tus progresos.

                  De este modo podrás ver cuánto te falta para alcanzar tu
                  objetivo. También es interesante que anotes tanto lo positivo
                  (avances, buenas sensaciones, etc.) como lo negativo (errores
                  que has cometido, ideas para mejorar) ... Te recomendamos que
                  seas rígido y actualices tu diario cada día a la misma hora.
                  Además, con el surgimiento de aplicaciones smartphone, puedes
                  tener un diario de tus progresos de forma prácticamente
                  automática, en según qué campos. Por ejemplo, si tu objetivo
                  es correr cinco kilómetros en el menor tiempo posible, existen
                  apps que monitorizan tu actividad por ti. De este modo puedes
                  tener en tu ordenador un montón de información que te dé
                  feedback sobre tu rendimiento y tus progresos.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>4. Un día puedes fallar… pero no dos</strong>
                </h4>
                <p className="text-parrafo">
                  Los seres humanos somos profundamente imperfectos. Si un día
                  no conseguimos avanzar nada, debemos relativizarlo. Todos
                  tenemos un mal día en que la pereza nos paraliza. Pero la
                  regla de oro es la siguiente: puedes fallar un día, pero no
                  dos días consecutivos. Si el día anterior no lograste sentirte
                  motivado para llevar a cabo las acciones cotidianas que te
                  acercan al objetivo, el segundo día es clave. No te permitas
                  que ese segundo día también te boicotee la pereza o cualquier
                  otra excusa. No puedes perder dos días seguidos porque
                  entonces estarías labrando un precedente mental que justifique
                  tu holgazanería futura.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>
                    5. La sana competencia entre amigos es una gran fuente de
                    motivación
                  </strong>
                </h4>
                <p className="text-parrafo">
                  A todos nos gusta la competición sana, sobre todo cuando nos
                  rodeamos de personas que nos hacen sentir bien. Esta
                  predisposición a la competencia puede sernos muy útil para
                  incentivarnos a luchar por nuestros objetivos. Si conoces a un
                  familiar, un amigo o un compañero de trabajo que tiene unas
                  metas parecidas a las tuyas, puedes “reclutarle” para tener
                  una sana competencia que pueda ayudaros a ambos. Semana tras
                  semana, podéis poneros al día de quién ha logrado correr más
                  kilómetros, fumar menos cigarrillos, conseguir más ventas,
                  hacer más flexiones, etcétera. De todos modos, esto debe ser
                  un incentivo, no un lastre: tus metas deben estar ponderadas y
                  deben ser equitativas respecto a la otra persona. Por ejemplo,
                  sería absurdo que alguien que empieza a correr se comparara
                  con un fondista profesional. La clave no es compararse
                  constantemente sino apoyarse en el otro para seguir avanzando,
                  y que cada uno vaya logrando sus propias metas.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>
                    6. Prepara tu mente para los momentos de bajón
                  </strong>
                </h4>
                <p className="text-parrafo">
                  A lo largo de un largo camino, puede que pases por momentos
                  buenos y momentos malos. En estos momentos en que no nos salen
                  las cosas como desearíamos, puede venirnos a la cabeza ciertos
                  pensamientos derrotistas y la urgencia irrefrenable de
                  abandonar el barco. No tengas miedo cuando estos pensamientos
                  te aborden, ya que es completamente natural que de vez en
                  cuando surjan y te inviten a dejar de luchar. Si eres
                  consciente de ellos, puedes gestionarlos para que no te
                  afecten. Por cada momento de bajón que experimentes, ten
                  pensado un motivo de peso para seguir luchando.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>
                    7. Haz una lista con tus razones para seguir motivado
                  </strong>
                </h4>
                <p className="text-parrafo">
                  Ahondemos en el punto anterior. Si conoces tus motivos que te
                  empujan a seguir tirando del carro y esforzándote cada día,
                  tienes mucho ganado. Es el antídoto perfecto para las excusas,
                  la pereza y los secuestros mentales. Muchas personas se
                  motivan pensando en sus seres queridos. Otras personas lo
                  enfocan desde un sentido más individual o por la gran
                  motivación intrínseca que sienten hacia esa actividad que
                  practican. Sea como sea, es bueno que escribas en un papel
                  cuáles son tus motivaciones.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>8. La importancia de un buen consejero</strong>
                </h4>
                <p className="text-parrafo">
                  Cuando persigues un sueño, es probable que otras personas ya
                  lo hayan conseguido antes que tú. Contar con el apoyo de una
                  persona con una larga experiencia puede ser clave para que te
                  explique algunos trucos y reflexiones para que puedas lograr
                  lo que te propones. También puedes buscar cursos o seminarios
                  de personas que hablen sobre aquello que te interesa. No
                  conviene despreciar el conocimiento que pueden aportarte otras
                  personas. En nuestra sociedad, ya casi todo está inventado.
                  Pero sin embargo hay pocas personas que tengan la capacidad
                  para innovar y buscar nuevas formas de resolver problemas. Si
                  eres capaz de empaparte de mucho conocimiento proveniente de
                  distintas fuentes, es probable que puedas motivarte y seguir
                  por el buen camino.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>9. Descubre tus verdaderas pasiones</strong>
                </h4>
                <p className="text-parrafo">
                  Esto es básico. Cuando disfrutamos genuinamente con una
                  actividad, conseguimos tener un Estado de Flow que nos permite
                  rendir al máximo de forma que hasta que perdemos la noción del
                  tiempo. Antes hemos hablado de la motivación intrínseca: es
                  aquella motivación que sentimos por el placer mismo de
                  realizar algo. Cuando conseguimos descubrir qué nos apasiona y
                  tenemos la suerte de podernos dedicar a ello, nuestra
                  motivación intrínseca nos permitirá afrontar la tarea y el día
                  a día de un modo realmente efectivo. Si, por contra, no nos
                  agrada aquello a lo que nos dedicamos y por tanto no contamos
                  con una buena dosis de motivación intrínseca, solo podremos
                  estar motivados gracias a la motivación extrínseca, es decir,
                  si tenemos incentivos (económicos o de otro tipo) para seguir
                  adelante. Por tanto, es importante que escojas tu vida en base
                  a lo que te gusta hacer, puesto que estarás más motivado.
                </p>
              </Container>
              <Container>
                <h4 className="text-center-appHome">
                  <strong>
                    10. Inspírate con las pequeñas cosas del día a día
                  </strong>
                </h4>
                La clave para motivarse es ser una persona abierta al mundo y
                encontrar inspiración en los pequeños detalles cotidianos. La
                inspiración puedes encontrarla en casi cualquier cosa. No solo
                te va a permitir motivarte en un momento dado (que también),
                sino también a mantener tu motivación durante largas temporadas.
              </Container>
            </Container>
            <Image
              src="https://res.cloudinary.com/academia/image/upload/v1628603566/como-motivar-a-las-personas-ciencia-euroresidentes_sdwf4n.jpg"
              className="mx-auto d-block img-fluid"
            />
      </div>

      <h1>Enlaces de interes</h1>
      <p className="text-center">
            <em>En esta sección encontraras canales, podcast que te pueden ayudar</em>
          </p>
          <hr />
      <li>Este canal de encontraras podcast de temas muy variados sobre la mente <a href="https://www.youtube.com/channel/UCYxGNI8Au74jEMY5hZTyNgg"> Entiende tu mente </a></li>
      <li>¿Cuántos años llevan diciendo que van a cambiar, ahorrar, viajar o bajar de pesa? Pero nada de eso pasa. <a href="https://youtu.be/dyjXSG-kVkk"> Podcast </a></li>
      <li>Todos es Posible es el mensaje de Motivación Personal mas Poderoso y te recomendamos escucharle con Audifonos !!<a href="https://youtu.be/1XwTcRWT8AA">Todo es Posible</a></li>
      <li>Todo lo recuperaré al doble, correré el riesgo porque todo lo que necesito ya lo llevo por dentro. !!<a href="https://youtu.be/F3G-_MahXyk">CORRERÉ EL RIESGO</a></li>
    </div>
  );
};

export default EmotionalAssistance;
