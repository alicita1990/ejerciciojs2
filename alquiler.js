

const alquiler = document.querySelector("#alquiler");

const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      descripcion:
        "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      baños: 2,
      costo: 2.0,
      smoke: false,
      pets: true,
    },

    {
        nombre: "condominio a pasos de supermercado",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion:  "Condominio con excelente ubicación",
        ubicacion: "1495 Las Golondrinas",
        habitaciones: 3,
        baños: 2,
        costo: 2.0,
        smoke: false,
        pets: true,
      },

      {
        nombre: "Hermoso departamento",
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion:
          "Hermoso despartamento amoblado con buena iluminación.",
        ubicacion: "999 la piramide.",
        habitaciones: 1,
        baños: 2,
        costo: 2.0,
        smoke: false,
        pets: true,
      },


      {
        nombre: "departamento",
        src: "https://www.zonaprop.com.ar/propiedades/clasificado/veclcain-venta-casa-en-campo-timbo-53738462.html",
        descripcion:
          "Hermoso despartamento amoblado con buena iluminación.",
        ubicacion: "999 la piramide.",
        habitaciones: 1,
        baños: 2,
        costo: 2.0,
        smoke: false,
        pets: true,
      } ,
      
      {
        nombre: "Hermoso lugar",
        src: "https://www.inmoart.cl/propiedad/arriendo-casa-en-villarrica/329",
        descripcion:
          "Hermoso despartamento amoblado con buena iluminación.",
        ubicacion: "999 la piramide.",
        habitaciones: 1,
        baños: 2,
        costo: 2.0,
        smoke: false,
        pets: true,
      },
      
      {
        nombre: "paraiso en la ciudad",
        src: "https://unsplash.com/es/fotos/edificio-de-hormigon-blanco-y-negro-0tKCSyLXqQM",
        descripcion:
          "Hermoso despartamento amoblado con buena iluminación.",
        ubicacion: "999 la piramide.",
        habitaciones: 1,
        baños: 2,
        costo: 2.0,
        smoke: false,
        pets: true,
      }

    ]
    function generarTemplate(propiedad) {
        return `
         <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
          <div class="propiedad">
            <h2>${propiedad.nombre}</h2>
            <img src="${propiedad.src}" alt="${propiedad.nombre}">
            <p>${propiedad.descripcion}</p>
            <ul>
              <li>Ubicación: ${propiedad.ubicacion}</li>
              <li>Habitaciones: ${propiedad.habitaciones}</li>
              <li>Baños: ${propiedad.baños}</li>
              <li>Costo: ${propiedad.costo}</li>
              <li>Permite fumar: ${propiedad.smoke ? 'Sí' : 'No'}</li>
              <li>Admite mascotas: ${propiedad.pets ? 'Sí' : 'No'}</li>
            </ul>
          </div>
          </div>
          </div>
          </div>
        `;
      }
  
      const contenedor = document.getElementById('propiedades');
  
      propiedades_alquiler.forEach(propiedad => {
        contenedor.innerHTML += generarTemplate(propiedad);})



