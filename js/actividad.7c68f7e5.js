(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0125":function(e,A,t){e.exports=t.p+"img/imagen4.ef32eaf7.png"},"01f0":function(e,A,t){e.exports=t.p+"media/end-game-fail.8344f3d3.mp3"},3595:function(e,A,t){},4298:function(e,A,t){"use strict";t.r(A);var a=function(){var e=this,A=e._self._c;return A("div",{staticClass:"curso-main-container pb-3"},[A("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),A("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[A("div",{attrs:{id:"Actividad"}},[A("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},s=[],r=function(){var e=this,A=e._self._c;return A("div",{staticClass:"tarjeta--blanca"},[A("div",{staticClass:"row align-items-center mb-4"},[e._m(0),A("div",{staticClass:"col"},[A("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),A("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),A("div",{staticClass:"tarjeta tarjeta--lightest-gray px-4 pb-4 pt-4 px-md-5"},[e.respuestas.length!==e.preguntas.length?A("div",{staticClass:"d-flex justify-content-end mb-2"},[A("div",{staticClass:"form-check form-switch"},[A("input",{directives:[{name:"model",rawName:"v-model",value:e.audioEnabled,expression:"audioEnabled"}],staticClass:"form-check-input",attrs:{id:"switchCheckAudio",type:"checkbox"},domProps:{checked:Array.isArray(e.audioEnabled)?e._i(e.audioEnabled,null)>-1:e.audioEnabled},on:{change:function(A){var t=e.audioEnabled,a=A.target,s=!!a.checked;if(Array.isArray(t)){var r=null,o=e._i(t,r);a.checked?o<0&&(e.audioEnabled=t.concat([r])):o>-1&&(e.audioEnabled=t.slice(0,o).concat(t.slice(o+1)))}else e.audioEnabled=s}}}),A("label",{staticClass:"form-check-label",attrs:{for:"switchCheckAudio"}},[e._v("¿Audio?")])])]):e._e(),e.respuestas.length===e.preguntas.length?A("ActividadResultados",{attrs:{respuestas:e.respuestas,"mensaje-aprobado":e.cuestionario.mensaje_final_aprobado,"mensaje-reprobado":e.cuestionario.mensaje_final_reprobado,"porcentaje-aprobadas":e.porcentajeAprobadas,"preguntas-count":e.preguntas.length,"total-preguntas-base":e.cuestionario.preguntas.length},on:{reiniciar:e.onReiniciar}}):A("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected,"numero-pregunta":e.preguntaSelectedIdx+1},on:{respuestaSelected:e.onRrespuestaSelected}})],1),A("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},o=[function(){var e=this,A=e._self._c;return A("div",{staticClass:"col-auto"},[A("img",{attrs:{src:t("8da0"),alt:""}})])}],i=(t("14d9"),t("d7b0")),n=t.n(i),q=t("884b"),c=t.n(q),u=t("8cc8"),d=t.n(u),l=t("fe00"),p=t.n(l),m=t("01f0"),g=t.n(m),b=function(){var e=this,A=e._self._c;return A("div",[A("h3",{staticClass:"mb-4 pb-4"},[A("strong",[e._v(e._s(e.numeroPregunta)+". "),A("span",{domProps:{innerHTML:e._s(e.pregunta.texto)}})])]),A("div",{staticClass:"row align-items-center"},[A("div",{staticClass:"d-none d-md-block col-5"},[A("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),A("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,a){return A("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":a!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(A){return e.onRespuestaSelected(t)}}},[A("div",{staticClass:"row align-items-center"},[A("div",{staticClass:"col-auto"},[A("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),A("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[A("hr"),e.respuestaSelected.esCorrecta?A("div",{staticClass:"pt-1"},[A("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):A("div",{staticClass:"pt-1"},[A("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)},C=[],h={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0},numeroPregunta:{type:Number,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(A=>({...A,correcta:e===A.id&&A.esCorrecta,incorrecta:e===A.id&&!A.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},f=h,x=(t("50f8"),t("2877")),v=Object(x["a"])(f,b,C,!1,null,"24e26bad",null),j=v.exports,_=function(){var e=this,A=e._self._c;return A("div",{staticClass:"tarjeta-avance"},[A("div",{staticClass:"row align-items-center"},[A("div",{staticClass:"d-none d-md-block col"},[A("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[A("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),A("div",{staticClass:"col col-md-auto text-center"},[A("span",{staticClass:"lh-1"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")])]),A("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?A("div",{staticClass:"py-4"}):9===e.respuestasLength?A("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(A){return e.$emit("continuar")}}},[A("span",[e._v("Verificar")]),A("i",{staticClass:"fas fa-arrow-right"})]):A("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(A){return e.$emit("continuar")}}},[A("span",[e._v("Continuar")]),A("i",{staticClass:"fas fa-arrow-right"})])])])])},S=[],y={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(A=>{A.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}},E=y,w=(t("5be9"),Object(x["a"])(E,_,S,!1,null,"90d7c5a6",null)),B=w.exports,I=function(){var e=this,A=e._self._c;return A("div",{staticClass:"row align-items-center justify-content-around"},[A("div",{staticClass:"col-lg-5"},[(e.aprobado,A("img",{staticClass:"mx-auto d-none d-lg-block",attrs:{src:t("a46c"),alt:""}}))]),A("div",{staticClass:"col-lg-4"},[A("div",{staticClass:"d-flex align-items-center flex-column"},[A("div",{staticClass:"circle-container mb-4"},[A("svg",{staticClass:"circle",attrs:{viewBox:"0 0 36 36"}},[A("defs",[A("linearGradient",{attrs:{id:"progressGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[A("stop",{attrs:{offset:"0%","stop-color":"#00FF00"}}),A("stop",{attrs:{offset:"50%","stop-color":"#FFFF00"}}),A("stop",{attrs:{offset:"100%","stop-color":"#FF0000"}})],1)],1),A("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}}),A("path",{staticClass:"circle-progress",attrs:{"stroke-dasharray":e.currentPercentage+", 100",d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}})]),A("div",{staticClass:"percentage-text"},[e._v(" "+e._s(Math.round(e.porcentajeAprobadas))+"% ")])]),e.aprobado?[A("h3",[e._v("¡BUEN TRABAJO!")]),A("p",{staticClass:"mb-0 text-center"},[e._v(" "+e._s(e.mensajeAprobado)+" ")])]:[A("h3",[e._v("VUELVE A INTENTARLO")]),A("p",{staticClass:"mb-0 text-center"},[e._v(" "+e._s(e.mensajeReprobado)+" ")])],A("hr",{staticClass:"w-100"}),A("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))]),e.totalPreguntasBase>=e.preguntasCount?A("button",{staticClass:"boton btn-lg boton--b py-3 px-5 mt-3",on:{click:function(A){return e.$emit("reiniciar")}}},[A("span",[e._v("Volver a intentarlo")])]):e._e()],2)])])},M=[],R={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0},mensajeAprobado:{type:String,default:"¡Excelente! Ha superado la actividad."},mensajeReprobado:{type:String,default:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."},porcentajeAprobadas:{type:Number,required:!0},totalPreguntasBase:{type:Number,required:!0},preguntasCount:{type:Number,required:!0}},data(){return{currentPercentage:0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(A=>{A.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}},mounted(){this.animateProgress()},methods:{animateProgress(){const e=1500,A=performance.now(),t=a=>{const s=(a-A)/e;s>1?this.currentPercentage=this.porcentajeAprobadas:(this.currentPercentage=s*this.porcentajeAprobadas,requestAnimationFrame(t))};requestAnimationFrame(t)}}},L=R,k=(t("c1bd"),Object(x["a"])(L,I,M,!1,null,"b63dbcac",null)),P=k.exports,D={name:"Actividad",components:{ActividadPregunta:j,ActividadBarraAvance:B,ActividadResultados:P},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0,audioEnabled:!0,totalPreguntasOriginales:0}),computed:{preguntas(){const e=10,{preguntas:A}=this.cuestionario;if(!A)return[];const t=this.shuffle(A),a=t.length>=e?t.slice(0,e):t;return console.log("preguntasSeleccionadas",a,"preguntasBarajadas",t),a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]},porcentajeAprobadas(){if(0===this.respuestas.length)return 0;const e=this.respuestas.filter(e=>e.esCorrecta).length;return Math.round(e/this.respuestas.length*100)}},methods:{shuffle(e){for(let A=e.length-1;A>0;A--){const t=Math.floor(Math.random()*(A+1));[e[A],e[t]]=[e[t],e[A]]}return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e},e?this.reproducirSonido(c.a):this.reproducirSonido(d.a)},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1?(this.preguntaSelectedIdx+=1,this.reproducirSonido(n.a)):this.finalizarPrueba()},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1,this.$emit("reiniciar")},reproducirSonido(e){if(this.audioEnabled){const A=new Audio(e);A.play()}},finalizarPrueba(){const e=this.preguntas.length,A=this.respuestas.filter(e=>e.esCorrecta).length,t=A/e*100;t>=70?this.reproducirSonido(p.a):this.reproducirSonido(g.a)}}},F=D,H=(t("709b"),Object(x["a"])(F,r,o,!1,null,"2a06c9a3",null)),Q=H.exports,N={name:"ActividadDidactica",components:{Actividad:Q},data:()=>({cuestionario:{tema:"Nombre del componente formativo",titulo:"Cuestionario",introduccion:"<b> Objetivo:</b> Identificar  la clasificación, obtención, características y aplicaciones de los metales y aleaciones no ferrosas, basados en el contenido del documento proporcionado.",barajarPreguntas:!0,preguntas:[{id:1,texto:"¿Cuál es una característica común de los metales no ferrosos?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Resistencia a la oxidación.",esCorrecta:!0},{id:"b",texto:"Bajo peso específico.",esCorrecta:!1},{id:"c",texto:"Alta concentración de hierro.",esCorrecta:!1},{id:"d",texto:"Alta resistencia magnética.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál de los siguientes metales es considerado un metal puro utilizado en ingeniería?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Zinc.",esCorrecta:!1},{id:"b",texto:"Cobre.",esCorrecta:!0},{id:"c",texto:"Titanio.",esCorrecta:!1},{id:"d",texto:"Berilio.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué proceso de extracción de metales utiliza bacterias para obtener el metal?",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Biometalurgia.",esCorrecta:!0},{id:"b",texto:"Pirometalurgia.",esCorrecta:!1},{id:"c",texto:"Electrometalurgia.",esCorrecta:!1},{id:"d",texto:"Hidrometalurgia.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Cuál de las siguientes es una aleación ultraligera?",imagen:t("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Acero inoxidable.",esCorrecta:!1},{id:"b",texto:"Magnesio.",esCorrecta:!0},{id:"c",texto:"Bronce.",esCorrecta:!1},{id:"d",texto:"Estaño.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Para qué se utiliza principalmente el aluminio en la industria?",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Fabricación de joyas.",esCorrecta:!1},{id:"b",texto:"Producción de imanes.",esCorrecta:!1},{id:"c",texto:"Construcción de aeronaves.",esCorrecta:!0},{id:"d",texto:"Recubrimiento de circuitos electrónicos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué tipo de aleación se usa cuando se requiere alta resistencia al calor y ligereza?",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Aleación de titanio.",esCorrecta:!0},{id:"b",texto:"Bronce.",esCorrecta:!1},{id:"c",texto:"Latón.",esCorrecta:!1},{id:"d",texto:"Aleación de cobre-plomo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Cuál es el método principal para obtener cobre de alta pureza?",imagen:t("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Electrólisis.",esCorrecta:!0},{id:"b",texto:"Reducción con carbón.",esCorrecta:!1},{id:"c",texto:"Flotación.",esCorrecta:!1},{id:"d",texto:"Concentración magnética.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué elemento se utiliza para mejorar la dureza del oro en las aleaciones?",imagen:t("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Cobre.",esCorrecta:!0},{id:"b",texto:"Zinc.",esCorrecta:!1},{id:"c",texto:"Aluminio.",esCorrecta:!1},{id:"d",texto:"Plomo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"La pirometalurgia utiliza calor para la extracción de metales.",imagen:t("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero.",esCorrecta:!0},{id:"b",texto:"Falso.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"Las aleaciones pesadas son aquellas que tienen un bajo peso específico.",imagen:t("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Falso.",esCorrecta:!0},{id:"b",texto:"Verdadero.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},G=N,Y=Object(x["a"])(G,a,s,!1,null,null,null);A["default"]=Y.exports},"50f8":function(e,A,t){"use strict";t("3595")},"5be9":function(e,A,t){"use strict";t("eea7")},"5d4e":function(e,A,t){},"6a9b":function(e,A,t){e.exports=t.p+"img/imagen2.69e41190.png"},"709b":function(e,A,t){"use strict";t("d26d")},"884b":function(e,A,t){e.exports=t.p+"media/success.7ee5a5c2.mp3"},"8cc8":function(e,A,t){e.exports=t.p+"media/fail.a3e9634d.mp3"},"8da0":function(e,A,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},a46c:function(e,A,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},b3a4:function(e,A,t){e.exports=t.p+"img/imagen1.0cd0aa7d.png"},b70f:function(e,A,t){e.exports=t.p+"img/imagen3.6294c78b.png"},c1bd:function(e,A,t){"use strict";t("5d4e")},d26d:function(e,A,t){},d7b0:function(e,A){e.exports="data:audio/mpeg;base64,SUQzAwAAAAACEVRBTEIAAAABAAAAVENPTgAAAAEAAABUSVQyAAAAAQAAAFRQRTEAAAABAAAAVFJDSwAAAAEAAABUWUVSAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7kGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhpbmcAAAAPAAAACAAACuUAQ0NDQ0NDQ0NDQ0NDWlpaWlpaWlpaWlpae3t7e3t7e3t7e3t7e5eXl5eXl5eXl5eXl7m5ubm5ubm5ubm5ubnb29vb29vb29vb29vx8fHx8fHx8fHx8fHx////////////////AAAAUExBTUUzLjk5cgS5AAAAACwxAAA1ICQDd00AAeAAAArloryNkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7sGQAAACbAMz1BAAKAAANIKAAAQr4bS35vAAAAAA0gwAAAHdyEAAmgAAAH5lw8AEePzP4AeAO0iAMjIjsqu8T0AAAAAAAOaIRZkgyKugChhKwzMJGiYy6JJkQxrkMcITBwgfWwwAMRSBgD2gvJFjaltOXTbgzwDIhpiYVLE3kz16jG/9UOW///5/3M7L1qpkwAAJmO/6kAAeD2QqwlwGxFui+whBE8gaNG0jh6haYsFpq8a1Frwtjo8B8Yul0gng6gIoeRsdH0lUd0LIVuy0WWgyLDypddl/fexw1MiT/bMOpAqxDbfWEgBkC3Lps5uLtAsGCLVETRiHN2ATBQpK19mAzcTZSz1X83SU1SrLU3SYlkOUii+6qLbcdWxtyjUMYJKnmP/pvuf9Sgffm10rlX/9X/laXllBphp//sZAHophwNmwk8mIwYDJQgQYUqYKiJOTIAi4b7LwEYMrDi/FzCjGKK3NiLiEgHJfPqEYGSklIIupaTKTTSrQSWdIOb559JTJqWtBTs84W3WghvUt7qQbugbi6XwSOWDGmv/PGYAAAAMAGAQ8b62NJEAAAAIAwwNAfDAiASMA8MtOAUAVMDQBYwwAEDDHFzMatG0xUg2jNqWYMGUFULgCGSCF0YFoJZiYgjGAQA6HITi2TPnToQAsfNwZCD4CRs+GQBCYAQBOYzh0VHAZ4BjabgcAFXpiTBmSRdsaqMtkScyANY8Xn3/Y0KgkEzCVBeQPGLXxdxIxepJi9KYZcmGo1/O6+3hL7fe597llWu48/v/v8ahwQAMPlQkeUe+p1K3RZ//069VWHIAAANwm/tAAMDg1ipZEA//tQZPEA8oUmyf9toAgAAA0g4AABCqSZJ+xtaWAAADSAAAAEA9hBgcMGDxUYzIQYZjGqeOt/w88pzLgrQsQlI/SdwRKRRHNJgbRwokFMR1AXYni8GKhRw20iJkxeLzu2tbosM6S2w8staSFbrr9lPROiiliFpIRGqyT/+uHYAAEQzvujAAHFC2y2TQDAIAUVEbRlhAJEzLzFK/PECEFDYvSu6Mtu2r9uLOw1lVvw7AqBFECM1iQBwrfjRYYVCCGkzeIJvbhGXw9jealnj/7YaP/7cGT0AANLMcn9agAIAAANIKAAARg4ySf57QAAAAA0gwAAAJt57iP4+edEyL0/2fbu//f9PWp4cgAjRSu+jIAEi4DhINClLx8QIBgSCEuRoCAEPmGoKbOB4ECTZZEqnRs3RYyEG2uNoTPFRIFmbvCcs8eFeHeNfMOPHlhSbY3jp+wEop+8t6Vm1JjeIu8Zr6JrWf75nxr719fGaejVWmKWDyYo1yrkbtXR0Uh2kX/nf9kGIAEADADABKMuJIAAAAABgTASlkkVjAoA4AAIBgJgOhUAAwMgVyICwFBUGBgDOYdoLBgHAgmBIDARCLmEYCkbRk6Bs0CQM3l5xCwCik87FMtdYbTHaMEB7B58x5SNZADPBjv/6V5axJ0ICzDQczcVUtHATP61F4YFuBM3cDVy4kAy2CkE16H/+2Bk6IDzQiZLf3JACAAADSDgAAEMxMcn7PEJYAAANIAAAARucWOhj/+5f1f///////////6q37QAAAG+qABgCgRmAcAWXpAIAgoAOYAYCiKwWAPFgFDAGATBwEJgFgiGEuIkY3pDRrCmSmLsLiYVgFZgCgMFApo0He4BqmDSNyZbksCmCWxUFTph2lxqL5BhanONLS0qmrLS5S6u0tLllTZcrSqHpVfv87rdmDZDvVbOBeaxw/OygTpDhhhwXSkjFe2/63s7ywAAGWH0ZABxtKqGGaQlgVdAGIHhJoWBNk1PQLimAAUGC6knbl8AaXxECRbNDdXi8xIAZZC4plVmb0PZvlL/+3Bk8YAD1zFJfXHgCAAADSCgAAETNHkn+e2AAAAANIMAAADmYrtiTY0vFRY/vCXZCYWYlZHwPMii+3Y9rUJa7qQV+nwn/MbfHf3pHnCy1tr/wx6r/yu//7Z4h2IABFz/jIAMx1MEOFhcKXpCEIQX/EbWVgZBgICCmA5uxMQLDCwVAIzhr7iNei0Iprbzxatf5VwpX2o26BUAbbPLH4ZzIIigdc5CKQ5VZHFA+x2HO1CgBNvnpSnfU1Wqgj+2Q7JfX3fz3/9TvEwwAjRr9GAAGLLLd17nnWEABZE2qWRwaCi3kLrnMYEBogO+7yVjGlbV8v3KLpiPlFq3L2e6gpMX6bodWrd+zzDE0d6tepirfimgkAuxmVS9San/7POp/o+6uniHdiA1ffZgAAkIuKBLcf4R0lp8GmP4//twZPGA9HUoS297IAgAAA0g4AABDqTNJ+z1C6AAADSAAAAEBlB0s4hIpw4jqVSeSKsNJHbblUDpyrWzXMgEiRmZma15Z2ScCukoSfEqFhpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7UGT6APNlM8n7GyroAAANIAAAAQtcmSfssFLgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+yBk7A/yGBtJeeg0mAAADSAAAAEAAAH+AAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8="},eea7:function(e,A,t){},fe00:function(e,A,t){e.exports=t.p+"media/end-game-success.3b2668a8.mp3"}}]);
//# sourceMappingURL=actividad.7c68f7e5.js.map