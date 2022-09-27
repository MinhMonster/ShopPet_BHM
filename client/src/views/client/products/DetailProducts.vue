<template>
    <div class="body">
        <!-- <section id="main-body"> -->
        <div class="detail-product">
            <!-- <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h3 class="display-5">Product Information</h3>
                <router-link to="/products">Back</router-link>
            </div> -->
            <div class="container">
                <div class="row">
                    <div class="col-xs-5 col-md-5 col-lg-5">
                        <img class="img-detail-product" src="@/assets/images/products/gai-xinh-1.jpg" alt="">
                    </div>
                    <div class="col-md-7">
                        <div class="details-name text-left">
                            <h1> {{product.name}} </h1>
                        </div>

                        <div class="details-price flex-row-space-between">
                            <div class="flex-cloumn text-left">
                                <div class="price-sale mgb-10px">
                                    {{product.price}} VND
                                </div>
                                <div class="sale">
                                    20%
                                    {{product.price}} VND
                                </div>
                            </div>
                            <div class="flex-cloumn text-left ">
                                <div class="mgb-10px"> Time Out</div>
                                <div class="time-out">
                                    {{product.time}}
                                </div>

                            </div>


                        </div>
                        <div class="content-product flex-cloumn text-left ">
                            <div class="list-title">
                                <p>ĐẶC QUYỀN ĐI KÈM</p>
                            </div>
                            <div class="list-content">
                                <ul>
                                    <li>Bảo hành sức khỏe 30 ngày.</li>
                                    <li>Giảm 10% khi mua bé thứ 2.</li>
                                    <li>Giảm trọn đời 5% khi mua phụ kiện.</li>
                                    <li>Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="quantity-product flex-row text-left mgt-10px">
                            <div class="">
                                <div class="flex-row">
                                    <div>Quantity: </div>
                                        <div class="prev" @click="prev()">-</div>
                                        <div class="quantily">{{quantity}}</div>
                                        <!-- <input class="quantily" v-model="quantity"/> -->
                                        <div class="next" @click="next()">+</div>
                                        <div class="">( {{this.product.quantity}})</div>

                                </div>
                            </div>
                            <div class="list-content">
                               
                            </div>
                        </div>

                        <div class="mgt-10px left">
                            <b-button variant="danger">Add To Cart</b-button>
                            <!-- <b-button  variant="outline-danger">Danger</b-button> -->
                        <b-button class="mgl-10px" variant="primary">Buy Now</b-button>
                        </div>
                        

                    </div>
                </div>

                

            </div>
        </div>
        <!-- </section> -->
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "ProductDta",
    data() {
        return {
            quantity: 1,
            // products: [],
            product: {
                id: "",
                pid: "",
                author: "",
                name: "",
                price: "",
                quantity:"",
                description: "",
                time: "",
            },
        };
    },
    created() {
        const productId = this.$route.params.id;
        console.log(productId);
        if (productId) {
            this.getProduct(productId);
        }
    },
    methods: {
        ...mapActions([""]),
        isNumber(value) {
            return /^\d*$/.test(value);
        },

        getProduct(productId) {
            this.$request.get(`http://localhost:8000/api/products/${productId}`).then((res) => {
                this.product = res.data;
                this.product.quantity = res.data.quantity
                // console.log(this.product)
            });
        },

        builUrl() {
            return `http://localhost:8000/api/products`;
        },
        next(){
            this.quantity +=1
            console.log(this.quantity)
            console.log(this.product.quantity)


            if (this.quantity > this.product.quantity) {
                this.quantity = this.product.quantity;
            }
        },
        prev(){
            this.quantity -=1
            if (this.quantity < 1) {
                this.quantity = 1;
            }
        }
    },
};
</script>
<style scoped>
.prev, .next, .quantily {
    padding: 5px 10px;
    border: 1px solid #a4a4a4;
}
.quantily{
    width: 50px;
    text-align: center;
}
.prev, .next{
    cursor: pointer;
}
.content-product {
    border-radius: 10px;
    margin-top: 1em;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
}
.list-title{
    background: var(--light);
    border-radius: 10px 10px 0 0;
    margin-bottom: 0;
    padding: 0.5em 1em;
}

.list-content{
    padding: 20px;
}

.list-content ul{
    list-style:disc;
}
.list-content ul li{
    padding: 5px;

}

img.img-detail-product {
    width: 100%;
    height: 300px;
}

.details-price {
    color: var(--white);
    background: linear-gradient(100deg, #ff424e, #fd820a);
    margin: 20px 0 0;
    padding: 6px 15px;
    border-radius: 6px;
}

.form-group {
    margin-bottom: 10px;
}
</style>
  