// tell the browser we want standarts in the code
'use strict';

/**
 * Handles logic for bisibility state switching
 *  @constructor
 *  @param {NodeList} elements
 *  @param {Number} startIndexAt Starts Carousel at this element
 */
function Carousel(elements, startIndexAt) {
    // set current index and cast 'NodeList' to 'Array'
    this.elements = [].splice.call(elements, 0);
    //set current index value of 'Number'
    this.currentIndex = 0;
    //determine how long our carousel is by measuring how many elements are recieved
    this.maxIndex = this.elements.length - 1;
}

// Carousel definitions scope
(function ( )  {
    /**
     *  Sets the carousel to the item
     *   @ return {undefined}
     */
this.next = function ( )  {
        if (this.currentIndex < this.maxIndex) {
            this.setIndexToVisible(this.currentIndex + 1);
        } else {
            this. setIndexToVisible(0);
        }
    };
   
   /**
    * Sets the carousel to the previous item
    * @return {undefined}
    */
this.previous = function ( ) {
    if (this.currentIndex > 0) {
        this.setIndexToVisible(this.currentIndex -1);
    } else {
        this.setIndexToVisible(this.maxIndex);
    }
};

/**
 * Sets the idnex of the provided number to visible, sets the rest to invisible
 * @param {Number} index
 * @return {undefined}
 */
this.setIndexToVisible = function (index) {
    console.log('Setting Index to  ' + index + ' from ' + this.currentIndex);
    
    // set index value
    this.currentIndex = index;
    
    // loop through elements
    this.elements.forEach(function (node, nodeIndex) {
        if (nodeIndex === index) { // make visilbe
            node.style.opacity = 1; // set CSS opacity to 100% (visible)
        } else { //visibility set to hidden
            node.style.opacity = 0; // set CSS opacity to 0% (invisible)
        }
    });
};
}).call(Carousel.prototype);

// initalization scope
(function ( ) {
    // instantiate 'Carousel'
    var carousel = new Carousel(document.querySelectorAll('.carousel-item'));
    
    // find next utton html, add click input listener
    document.querySelector('.btn-next').addEventListener('click', function ( ) {
        carousel.next( );
    }, false);
    
    // find previous button html, add click input listener
    document.querySelector('.btn-previous').addEventListener('click', function ( ) {
        carousel.previous( );
    }, false);
    
    //show current
    carousel.setIndexToVisible(0);
}).call(this);