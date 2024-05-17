import CategoryItems from '../category/CategoryItems.jsx';

import './data.scss';

const Data = ({categor}) =>{
   return(
    <div className="categories">
    {categor.map(( cat ) => (

      <CategoryItems key = {cat.id} categ={ cat } />

    ))}
  </div>)
}

export default Data