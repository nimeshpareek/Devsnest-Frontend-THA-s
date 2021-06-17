// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
const vol= {
    height : 10,
    radius: 10,
    pi: 3.14,
    

    volume : function() {
        return (2*this.pi*this.radius*this.height)
        
    }
}

console.log(vol.volume().toFixed(4))