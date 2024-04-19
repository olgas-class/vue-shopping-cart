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
    };
  },
  methods: {
    changeColor: function (clickedColor) {
      console.log("change", clickedColor);
      this.selectedColor = clickedColor;
    },
    changeMemory: function (clickedIndex) {
      console.log("change memory", clickedIndex);
      this.selectedOption = clickedIndex;
    },
    calculatePrice: function () {
      const plus = this.product.options[this.selectedOption].plus;
      const finalPrice = this.product.price + plus;
      return finalPrice.toFixed(2);
    },
    addToCart: function () {
      const curConfiguration = {
        name: `iPhone 13 ${this.selectedColor} ${
          this.product.options[this.selectedOption].text
        }`,
        price: this.calculatePrice(),
      };
      this.cart.push(curConfiguration);
    },
  },
}).mount("#app");
