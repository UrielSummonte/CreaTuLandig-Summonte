const items = [
  {
    id: 1,
    titulo: "Zapatillas Originals Country OG",
    precio: "$ 189.999",
    categoria: ["hombre", "outdoor"],
    descripcion:
      "Una silueta icónica reimaginada para el mundo de hoy, estas zapatillas adidas evocan el espíritu de la revolución del running de los 70. El exterior de cuero con rayas dentadas y la distintiva suela de caucho se mantienen fieles a sus raíces deportivas, pero estas zapatillas legendarias han sido rediseñadas para la vida urbana. La mediasuela de EVA ofrece amortiguación liviana que te envuelve en comodidad durante todo el día mientras sales a explorar. Ya sea que viajes a un nuevo destino o redescubras tu propio vecindario, estas zapatillas le inyéctan una sensación de aventura a tu día a día.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29c619fb67fc4061bbe17bfa195d8ee1_9366/Zapatillas_Originals_Country_OG_Negro_ID2962_01_standard.jpg",
    stock: 10,
  },
  {
    id: 2,
    titulo: "Zapatillas Adidas VL Court 3.0",
    precio: "$ 125.999",
    categoria: ["hombre", "outdoor"],
    descripcion:
      "Descomplicadas y refinadas a la vez, estas zapatillas adidas son fáciles de hacer tuyas dependiendo del estilo con el que las usés. Las icónicas 3 Tiras con bordes de color se destacan sobre la parte superior de cuero suave. La suela de caucho vulcanizada pudo provenir directamente del parque de skate. En el interior, la amortiguación ligera y el forro interno suave te garantizan comodidad desde todos los ángulos.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b638f655103f47eba01c2ea67cee0851_9366/Zapatillas_adidas_VL_Court_3.0_Negro_IH4789.jpg",
    stock: 15,
  },
  {
    id: 3,
    titulo: "Forum Low CL W The Grinch",
    precio: "$ 189.999",
    categoria: ["mujer", "outdoor"],
    descripcion:
      "Forum Low Cl W The Grinch es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Forum Low Cl W The Grinch podés dejar una reseña abajo; siempre nos encanta conocer tu opinión",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82dd18e35ad74b679f64bed8f6cfeed9_9366/FORUM_LOW_CL_W_THE_GRINCH_Rosa_ID8895.jpg",
    stock: 5,
  },
  {
    id: 4,
    titulo: "Zapatillas de Básquet AE 1 Georgia Red Clay",
    precio: "$ 199.999",
    categoria: ["mujer", "outdoor"],
    descripcion:
      "Lucí el estilo de una de las superestrellas emergentes del básquet. Estas zapatillas exclusivas de adidas Basketball y Anthony Edwards fueron creadas para los que aman ganar. La combinación de BOOST y mediasuela Lightstrike es ultraligera y te brinda un increíble retorno de energía en tus movimientos más explosivos. La suela de caucho te brinda el soporte que necesitás para atacar el aro, mientras que el logo exclusivo de Anthony Edwards le pone el toque final al look.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77a2c990f0634a858078deefdf414d42_9366/Zapatillas_de_Basquet_AE_1_Georgia_Red_Clay_Rojo_IF1863.jpg",
    stock: 8,
  },
  {
    id: 5,
    titulo: "Zapatillas de Trail Running Terrex Soulstride",
    precio: "$ 144.999",
    categoria: ["hombre", "outdoor"],
    descripcion:
      "Adentrate en la naturaleza y encontrá tu ritmo con las zapatillas de trail running Terrex Soulstride de adidas. Están diseñadas para ser versátiles con un dibujo híbrido en la suela y mucha amortiguación para pasar del asfalto al sendero sin problemas. Una ligera mediasuela EVA que amortigua tu pisada desde el primer paso hasta el último. La suela de caucho Traxion proporciona un agarre firme y seguro en superficies resbaladizas. El exterior de malla técnica ofrece transpirabilidad para que puedas llegar a tu destino cómodamente.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc9b50eff7054e8eaae631acd9139832_9366/Zapatillas_de_Trail_Running_Terrex_Soulstride_Azul_IG8024.jpg",
    stock: 11,
  },
  {
    id: 6,
    titulo: "Zapatillas AdiZero Adios Pro 3",
    precio: "$ 321.999",
    categoria: ["hombre", "running"],
    descripcion:
      "Las Adizero Adios Pro 3 son la máxima expresión de los productos Adizero Racing. Fueron diseñadas con y para atletas para lograr hazañas increíbles. Estas zapatillas de running adidas están diseñadas para optimizar la eficiencia del running. Nuestras varillas ENERGYRODS 2.0 de carbono ofrecen ligereza y firmeza para pasos ágiles y eficientes. La tecnología LIGHTSTRIKE PRO ultraliviana amortigua cada paso con las tres capas de espuma resistente que te ayudan a mantener la energía a largo plazo. Todo sobre una delgada suela de caucho textil para un agarre extraordinario en condiciones mojadas y secas.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2259ad072e1148fe92b04fe92d1a20d8_9366/Zapatillas_ADIZERO_ADIOS_PRO_3_Blanco_IG6441.jpg",
    stock: 9,
  },
  {
    id: 7,
    titulo: "AdiZero SL",
    precio: "$ 171.999",
    categoria: ["hombre", "running"],
    descripcion:
      "Las zapatillas de running Adizero SL seleccionan lo mejor de nuestra franquicia Adizero que rompe récords mundiales. La mediasuela de EVA LIGHTSTRIKE liviana ofrece resiliencia a la mediasuela para que puedas concentrarte en el próximo paso, mientras que el exterior está hecho de una malla técnica suave que está zonificada en áreas clave. El talón acolchado y la lengüeta brindan una comodidad óptima junto con el antepié Adizero. La suela premium está diseñada para proporcionar tracción.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7fb91c98d713451ba70c34a3892b0363_9366/ADIZERO_SL_Azul_IG8194.jpg",
    stock: 7,
  },
  {
    id: 8,
    titulo: "Zapatillas de Senderismo Terrex Ax4 Gore-Tex",
    precio: "$ 128.399",
    categoria: ["mujer", "outdoor"],
    descripcion:
      "Las zapatillas más versátiles de tu colección. Desde una caminata por un bosque hasta una aventura por los senderos de montaña, estas zapatillas de senderismo adidas Terrex te permiten explorar desde la base hasta la cima y en condiciones secas o mojadas. Tienen una membrana GORE-TEX que repele el agua para mantener tus pies secos en las condiciones mojadas. Su diseño combina la sensación de ligereza de los modelos para trail running con la estabilidad de un calzado de senderismo para que puedas enfrentarte a la aventura con seguridad y comodidad. El agarre extraordinario en todo tipo de condiciones que ofrece la suela de caucho Continental™ Rubber te permite confiar en que las AX4 te lleven a donde querrás sin preocuparte por tus pies.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c0aaeed977a4ef389a8ae700018de86_9366/Zapatillass_de_Senderismo_Terrex_AX4_GORE-TEX_Rojo_GZ1728.jpg",
    stock: 12,
  },
  {
    id: 9,
    titulo: "Zapatillas AdiZero Adios Pro 3",
    precio: "$ 321.999",
    categoria: ["mujer", "running"],
    descripcion:
      "Las Adizero Adios Pro 3 son la máxima expresión de los productos Adizero Racing. Fueron diseñadas con y para atletas para lograr hazañas increíbles. Estas zapatillas de running adidas están diseñadas para optimizar la eficiencia del running. Nuestras varillas ENERGYRODS de carbono ofrecen ligereza y firmeza para pasos ágiles y eficientes. La tecnología LIGHTSTRIKE PRO ultraliviana amortigua cada paso con las tres capas de espuma resistente que te ayudan a mantener la energía a largo plazo. Todo sobre una delgada suela de caucho textil para un agarre extraordinario en condiciones mojadas y secas.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a1662a0511644ea3b0ddf089bad387e6_9366/Zapatillas_Adizero_Adios_Pro_3_Blanco_IG6425.jpg",
    stock: 10,
  },
  {
    id: 10,
    titulo: "Zapatillas de Running 4DFWD 3",
    precio: "$ 298.999",
    categoria: ["mujer", "running"],
    descripcion:
      "Llevá tus carreras a una nueva dimensión con estas zapatillas de running adidas. Bautizadas con el nombre de su revolucionaria mediasuela de impresión 3D, estas zapatillas absorben el impacto y te impulsan hacia adelante con cada paso. La parte superior de tejido adidas Primeknit transpirable se adapta al movimiento natural del pie cuando corres por las calles de la ciudad. La suela de caucho Continental™ Rubber brinda agarre para que puedas avanzar con lluvia o sol. Ya sea que estés entrenando para tu primera carrera de 5K o simplemente corriendo por diversión, las zapatillas 4DFWD harán que cada carrera sea más cómoda.",
    imagen:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/786a86abe1e44174898310c99e309690_9366/Zapatillas_de_Running_4DFWD_3_Beige_ID3499.jpg",
    stock: 17,
  },
  {
    id: 11,
    titulo: "Nike Air Max Furyosa NRG",
    precio: "$ 299.999",
    categoria: ["mujer", "outdoor"],
    descripcion:
      "Apilada, visible y desplazada: la amortiguación Nike Air en el talón ofrece un look novedoso que añade comodidad a tu experiencia.",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/981442-800-800?width=800&height=800&aspect=true",
    stock: 14,
  },
  {
    id: 12,
    titulo: "Nike Air Pegasus 2005",
    precio: "$ 269.999",
    categoria: ["mujer"],
    descripcion:
      "Una pisada elástica para cualquier carrera. Vuelve la sensación familiar e ideal para ti que ofrece el Peg para ayudarte a alcanzar tus objetivos. Esta versión ofrece la misma responsividad y sujeción neutra que te encanta, con un look renovado inspirado en el estilo de los años 2000.",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/878835-800-800?width=800&height=800&aspect=true",
    stock: 9,
  },
  {
    id: 13,
    titulo: "Nike Vaporfly 3 Electric",
    precio: "$ 459.999",
    categoria: ["hombre", "running"],
    descripcion:
      "La placa Flyplate de fibra de carbono y largo completo se siente rígida y con propulsión. Nike ZoomX, nuestra espuma más responsiva, ahora está ligeramente mejorada. Como va desde el talón hasta la punta, brinda aún más retorno de energía que antes, lo que te da una sensación de elasticidad y rebote.",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/1022298-800-800?width=800&height=800&aspect=true",
    stock: 5,
  },
  {
    id: 14,
    titulo: "Air Jordan 1 Retro High OG",
    precio: "$ 349.999",
    categoria: ["hombre" , "urbano"],
    descripcion:
      "Clásico, original, remasterizado. Este AJ1 en blanco y negro, que está listo para salir a las calles con sofisticación, logra un equilibrio elegante con cuero premium. Los detalles refinados, el logotipo retro y el elegante Swoosh blanco unen todo el diseño. La corbata negra es opcional.",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/877730-800-800?width=800&height=800&aspect=true",
    stock: 15,
  },
  {
    id: 15,
    titulo: "Nike Pegasus 39 Shield",
    precio: "$ 187.999",
    categoria: ["hombre", "running"],
    descripcion:
      "Tu caballo alado regresa para ayudarte a avanzar bajo la lluvia. El acabado repelente al agua te ayuda a mantener los pies secos, mientras que una sensación cómoda en el interior, similar al tejido Fleece, mantiene los pies abrigados para carreras con mal tiempo. La tracción resistente y las dos unidades Zoom Air proporcionan agarre y amortiguación suave para que puedas sobrellevar el mal tiempo.",
    imagen:
      "https://nikearprod.vtexassets.com/arquivos/ids/793575-800-800?width=800&height=800&aspect=true",
    stock: 6,
  },
];

const err = "Hubo un error"

export const getProducts = (categoria) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (false) {
          reject(err);
        } else {
          const itemFiltrados = categoria
            ? items.filter((item) => item.categoria.includes(categoria))
            : items
          resolve(itemFiltrados);
        }
      }, 1000)
    })
  }

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.find((e) => e.id.toString() === id))
    }, 1000)
  })
}
