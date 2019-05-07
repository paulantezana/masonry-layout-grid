import './index.scss';

const masonryLayout = (container, itmes, columns) => {
    let columnsElements = []
    
    for( let i = 1; i <= columns; i++){
        let column = document.createElement('div')
        container.appendChild(column)
        columnsElements.push(column)
    }
    
    for(let m = 0; m < Math.ceil(itmes.length / columns); m++){
        for(let n = 0; n < columns; n++){
            let item = itmes[ m * columns + n]
            columnsElements[n].appendChild(item)
        }
    }
}

const Masonry = (classContainer='.MasonryGrid', classItems='.MasonryGrid-item')=>{
    let masonryContainers = [...document.querySelectorAll(classContainer)];
    if(masonryContainers){
        masonryContainers.map(container => {
            let masonryItems = container.querySelectorAll(classItems);
            let cols = getComputedStyle(container).getPropertyValue('--columns');
            if(masonryItems && cols){
                masonryLayout(container,masonryItems,cols)
            }
        });
    }
};

export default Masonry;


