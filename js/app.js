const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      product: {
        name: "iPhone 13",
        price: 1190,
        options: [
          {
            text: "128 GB",
            plus: 0,
          },
          {
            text: "256 GB",
            plus: 100,
          },
          {
            text: "512 GB",
            plus: 200,
          },
        ],
        colors: ["black", "blue", "green", "purple"],
      },
      selectedColor: "black",
      selectedOption: 0,
      cart: [],
      isCartClose: true,
    };
  },
  methods: {
    getImagePath: function () {
      return `assets/img/product/${this.selectedColor}.png`;
    },
    getTitle: function () {
      return `iPhone 13 ${this.selectedColor} ${
        this.product.options[this.selectedOption].text
      }`;
    },
    getFullPrice: function () {
      return (
        this.product.price + this.product.options[this.selectedOption].plus
      );
    },
    changeColor: function (clickedColor) {
      this.selectedColor = clickedColor;
    },
    changeOption: function (clickedIndex) {
      this.selectedOption = clickedIndex;
    },
    openCart: function () {
      this.isCartClose = false;
    },
    closeCart: function () {
      this.isCartClose = true;
    },
    // Aggiunge il prodotto selezionato al carrello
    addToCart: function () {
      const cartProduct = {
        name: this.getTitle(),
        price: this.getFullPrice(),
        option: this.product.options[this.selectedOption].text,
        color: this.selectedColor,
        quantity: 1,
      };

      this.cart.push(cartProduct);
    },
    getCartTotalPrice: function() {
      // Per ogni elemento del carrello sommare il prezzo dell'elemnto al prezzo totale
      if(this.cart.length === 0) return 0;
      return this.cart.reduce((sum, item) => (sum + item.price), 0);
    }
  },
}).mount("#app");
