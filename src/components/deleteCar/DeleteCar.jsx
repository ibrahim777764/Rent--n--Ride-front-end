import React from 'react';
import { useSelector } from 'react-redux';
import { deleteCarThunk } from "../../redux/Cars/Cars";
import './DeleteCar.scss';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);

  const handleDelete = (id) => {
    deleteCarThunk(id);
  };

  return (
    <div className="car-heading">
      <h1 className="car-head">Delete Car</h1>
      <div className="grid-display grid-simple">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <img src={car.image} alt="car" />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p>{car.price}</p>
            <p>{car.location}</p>
            <p>{car.duration}</p>
            <button type="button" onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

//   if (cars.length === 0) {
//     return (
//       <div className="no-cars-container">
//         <div className="no-cars">
//           <span>Loading....</span>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="delete-car-container">
//       <h2 className="delete-head">Delete Car</h2>
//       <hr id="add-room-hr" />
//       <p className="delete-para">
//         Would you like to delete your car from our website?
//         {" "}
//         <br />
//         You can do it with one click!
//       </p>

//       <div id="delete-car-table" className="table w-50 table-hover">
//         <table className="table w-100 table-hover">
//           <thead>
//             <tr>
//             <th scope="col" className="text-white">Car-Image</th>
//               <th scope="col" className="text-white">Name</th>
//               <th scope="col" className="text-center text-white">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {cars.map((car) => (
//               <tr className="car-row" key={car.id}>
//                 <td><img src={car.image} alt="car-img" className="text-white mt-3" /></td>
//                 <td><p className="text-white mt-3" id="room-name">{car.name}</p></td>
//                 <td className="text-center">
//                   <button
//                     id="delete-car-btn"
//                     className="mt-2 car-btn"
//                     type="button"
//                     onClick={handleDelete}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

export default DeleteCar;
