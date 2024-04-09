//ref link: https://www.freecodecamp.org/news/javascript-classes-how-they-work-with-use-case/
class Chair {
    static backSupport = true;
    static armSupport = true;
    constructor(color, seatHeight, seatSize, isMovable,
        isHeightAdjustable, type){
        this.color = color;
        this.seatHeight = seatHeight;
        this.seatSize = "16 inch";
        this.isMovable = false;
        this.isHeightAdjustable = false;
        this.type = "Chair";
    }

    adjustableHeight(){

    }

    moveChair(){

    }
}

const newChair = new Chair("blue", "25 inch", true);
console.dir("Chair Prototype", Chair);
console.log("Chair Prototype", newChair);

class OfficeChair extends Chair{
    //Private members
    #basePrice;
    #maxDiscount;
    #sellerAddress;
    constructor(color, seatHeight, isMovable, isHeightAdjustable, recliningAngle){
        super();
        this.color = color;
        this.isMovable = isMovable;
        this.seatHeight = seatHeight;
        this.isHeightAdjustable = isHeightAdjustable;
        this.type = "Office Chair";
        this.recliningAngle = 40;
        this.#basePrice = 1000;
        this.#maxDiscount = 5;
        this.#sellerAddress= "XYZ, street"
    }

    adjustableHeight(height){
        if(height > this.seatHeight){
            console.log(`Chair height changed to ${height}`);   
        } else {
            console.log(`Height cannot be decreased more than the seat height ${this.seatHeight}`)
        }
    }

    adjustAngle(angle){
        if(angle >= this.recliningAngle){
            console.log(`Chair angle changed to ${angle}`);        
        } else {
            console.log(`Angle cannot be decreased more than the min reclining angle ${this.recliningAngle}`);
        }
    }

    moveChair(x, y){
        if(this.isMovable){
            console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
        }
    }

    #getChairAmout(taxCharge){
		return this.#basePrice + (this.#basePrice - this.#basePrice * this.#maxDiscount / 100) + taxCharge;
    }

    generateBill(){
        console.log("**** BILLING INFORMATION ****");
        console.log(this.#getChairAmout(20));
        console.log(`Seller Address: ${this.#sellerAddress}`)
    }
}

const newOfficeChair = new OfficeChair("Red", 30, true, true, true, 30);
console.log(newOfficeChair.adjustableHeight(31));
newOfficeChair.adjustAngle(51);
console.log(newOfficeChair.moveChair(10,20));
console.log(newOfficeChair.type);
console.log("Chair Prototype", newChair);
newOfficeChair.generateBill();

class DinningChar extends OfficeChair{}
let dinChair = new DinningChar();
//console.log(dinChair.#basePrice) //Throws syntax error
