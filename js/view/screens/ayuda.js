/* ===== VISTA · js/view/screens/ayuda.js =====
   Pantalla de ayuda y guía paso a paso. */
function tourPreview(i){const a=[
['Hoy',['Vence hoy','Pendientes','Hecho'],['Avisos','Nueva tarea','Acceso rápido']],
['Nueva tarea',['Fecha','Prioridad','Proyecto'],['Nota','Subtareas','Repetición']],
['Calendario',['Mes','Semana','Hoy'],['Lun','Mar','Mié','Jue','Vie']],
['Proyectos',['Activos','Avance','Archivos'],['Diseño','Estudio','Trabajo']],
['Archivos',['Imágenes','Videos','PDF'],['Vista previa','Proyecto','Descargar']],
['Accesos',['Apps','Webs','Atajos'],['WhatsApp','GitHub','Gmail']],
['Respaldo',['Exportar','Importar','Sincronizar'],['Tus datos','Tus proyectos','Tus tareas']]
][i]||['OrganizaYa',['Tareas','Calendario','Proyectos'],['Archivos','Accesos','Respaldo']];
return `<div class="tourpreview" aria-hidden="true"><div class="tourtop"><div class="tourapp"><img src="icons/organizaya-mark.svg" alt="">OrganizaYa</div><div class="dots"><i></i><i></i><i></i></div></div><div class="tourbody"><b>${a[0]}</b><div class="tourcards">${a[1].map((x,j)=>`<div class="tourcard"><b>${j+1}</b><span>${x}</span></div>`).join('')}</div><div class="tourline a"></div><div class="tourline b"></div><div class="tourchips">${a[2].map(x=>`<span>${x}</span>`).join('')}</div></div></div>`}
function vAyuda(){$('#main').innerHTML=`<h2>Cómo usar OrganizaYa</h2><p class="sub">Todo lo necesario para empezar, sin complicaciones.</p>${AY.map((a,i)=>`<div class="it" style="cursor:default;--c:var(--acc);align-items:flex-start"><b style="font-size:1.3rem;min-width:26px">${i+1}</b><div class="t"><div class="n"><b>${a[0]}</b></div><div class="m" style="font-size:.9rem;margin-top:2px">${a[1]}</div></div></div>`).join('')}`}
function tour(i){i=i||0;const a=AY[i],u=i===AY.length-1;openM(`<div class="box"><div class="m">OrganizaYa · Paso ${i+1} de ${AY.length}</div><b style="font-size:1.25rem">${a[0]}</b><div>${a[1]}</div>${tourPreview(i)}<div class="row" style="margin:6px 0 0;justify-content:space-between">${i?`<button class="btn g" onclick="tour(${i-1})">Atrás</button>`:`<button class="btn g" onclick="tourEnd()">Saltar</button>`}${u?'<button class="btn" onclick="tourEnd()">Empezar</button>':`<button class="btn" onclick="tour(${i+1})">Siguiente</button>`}</div></div>`)}
