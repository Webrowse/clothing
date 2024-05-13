import './CategoryItems.scss';

const CategoryItems = ({ categ }) => {
    const { imageUrl, title } = categ;
    return (
        
        <div className="category">
            <div className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItems;
