import './App.css'
import "./index.css"; // Importamos Tailwind CSS

// Lista de productos (simulación de Mercado Libre)
const productos = [
  {
    id: 1,
    nombre: "Laptop Gamer",
    precio: "$3,500,000",
    imagen: "https://enjoyvideogames.com.co/wp-content/uploads/2025/01/f197d00f-62d1-41ba-9b81-6e1c748469aa-1200x1200.webp.webp",
  },
  {
    id: 2,
    nombre: "Smartphone 5G",
    precio: "$1,200,000",
    imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRenSHNmj-CZuaXGBMc2Cef-SpTZL8sx4FMJcVVKDpfpIplrl2K0hauLXlIqKRwGNSWQL47Q4E6qcV83aKOigIZEj60i4EOirvduG8NMBtR6v3pYqW_CP7KLg&usqp=CAE",
  },
  {
    id: 3,
    nombre: "Audífonos Inalámbricos",
    precio: "$250,000",
    imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMjXdoUsz0dlJQ7olXCMeaGuxXioDQmVsJ1sVCyO58Pm23CHOVBvOsDEEM751InwxPJonaJSWThoQ7W6qwzxkHTksihAnw6OkbHDjLO9XnRIQwaF_Ehr1L4g&usqp=CAE",
  },
];

const App = () => {
  return (
    <div className="w-100dvw justify-items-center p-4">
      <h1 className="text-2xl font-bold text-center text-[yellow] mb-6">
        Mercado Libre Clone
      </h1>

      {/* Grid para mostrar los productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border border-[#243c5a] p-4 rounded-lg shadow-lg bg-[white]"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-80 object-cover rounded-md"
            />
            <h2 className="text-lg text-amber-400 font-bold capitalize mt-2">
              {producto.nombre}
            </h2>
            <p className="text-green-600 font-bold text-lg mt-1">{producto.precio}</p>
            <button className="mt-2 w-full bg-[#000000] text-white py-2 rounded-md hover:bg-[#1b2d45]">
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
