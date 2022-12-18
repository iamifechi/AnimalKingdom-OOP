// Abstract class AnimalKingdom
class AnimalKingdom {
  constructor(hasBackbone, blood) {
    this.hasBackbone = hasBackbone;
    this.blood = blood;
    if (this.constructor === AnimalKingdom) {
      throw new Error('AnimalKindom cannot be called or instantiated')
    }
  }
}

class Vertebrates extends AnimalKingdom {
  constructor() {
    super()
    if (this.constructor === Vertebrates) {
      throw new Error('Vertebrates cannot be called or instantiated')
    }
  }
  hasBackbone = true;
}

class Invertebrates extends AnimalKingdom {
  constructor() {
    super()
    if (this.constructor === Invertebrates) {
      throw new Error('Vertebrates cannot be called or instantiated')
    }
  }
  hasBackbone = false;
}

class Arthropoda extends Invertebrates {
  blood = 'cold';
} //without backbone and coldblooded
class Fish extends Vertebrates {
  blood = 'warm';
} //with backbone and coldblooded
class Amphibia extends Vertebrates {
  blood = 'warm';
} //with backbone and coldblooded
class Reptiles extends Vertebrates {
  blood = 'cold';
} //with backbone and coldblooded
class Aves extends Vertebrates {
  blood = 'warm';
} //with backbone and warmblooded
class Mammals extends Vertebrates {
  blood = 'warm';
} //with backbone and warmblooded

const butterfly = new Arthropoda()
console.log(butterfly)

const dog = new Mammals();

console.log(dog)
