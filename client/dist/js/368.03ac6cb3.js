"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[368],{7368:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"body"},[t("main",{attrs:{id:"main"}},[t("div",{staticClass:"container bg-white"},[t("div",{staticClass:"panel-body flex-row-space-between-center"},[t("div",{staticClass:"btn"},[t("button",{staticClass:"btn btn-primary text-white"},[t("router-link",{attrs:{to:"/admin/management/products"}},[e._v("Product")])],1)]),t("div",{staticClass:"btn"},[t("button",{staticClass:"btn btn-primary text-white"},[t("router-link",{attrs:{to:"/admin/management/products/create"}},[e._v("Add New")])],1),t("button",{staticClass:"btn btn-info btn-sm mgl-10px text-white",on:{click:function(t){e.showFilter=!e.showFilter}}},[t("i",{staticClass:"fa fa-search"})])])]),e.showFilter?t("div",{staticClass:"filter flex-row-space-between-center"},[t("div",{staticClass:"search-wrapper"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search.name,expression:"search.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search Name"},domProps:{value:e.search.name},on:{input:function(t){t.target.composing||e.$set(e.search,"name",t.target.value)}}})]),t("div",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.search.minprice,expression:"search.minprice",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Min Price"},domProps:{value:e.search.minprice},on:{input:function(t){t.target.composing||e.$set(e.search,"minprice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.search.maxprice,expression:"search.maxprice",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Max Price.."},domProps:{value:e.search.maxprice},on:{input:function(t){t.target.composing||e.$set(e.search,"maxprice",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),t("div",{staticClass:"col-md-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search.author,expression:"search.author"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Author"},domProps:{value:e.search.author},on:{input:function(t){t.target.composing||e.$set(e.search,"author",t.target.value)}}})])])])]):e._e(),t("div",{staticClass:"card-deck mb-3 text-center scroll-x"},[t("div",{staticClass:"cards"},e._l(e.List,(function(s,r){return t("div",{key:r,staticClass:"card"},[t("router-link",{attrs:{to:{name:"home.products.detail",params:{id:s.id}}}},[t("img",{staticClass:"img-card",attrs:{src:a(737),alt:""}})]),t("div",{staticClass:"card-top"},[t("span",{staticClass:"item-1"},[e._v(e._s(s.pid)+" "+e._s(s.name))]),t("span",{staticClass:"item-2"},[e._v(e._s(s.price))])]),t("div",{staticClass:"card-bottom flex-row-space-between"},[t("div",[e._v("VND: "+e._s(s.price))]),t("div",[e._v("Buy: 2899")])])],1)})),0)]),this.page.count>1?t("div",{staticClass:"panel-footer"},[t("paginate",{attrs:{"page-count":this.page.count,"page-range":3,"margin-pages":2,"click-handler":e.clickCallback,"prev-text":"<<","next-text":">>","container-class":"pagination","page-class":"page-item"},model:{value:e.params.page,callback:function(t){e.$set(e.params,"page",t)},expression:"params.page"}})],1):e._e()])])])},r=[],i=a(2806),o=a.n(i),c={name:"ProductForm",components:{Paginate:o()},data(){return{search:{author:"",name:"",minprice:"",maxprice:""},products:[],page:{pageCount:0,count:1,per_page:5},currentSort:"time",currentSortDir:1,title:"product",showFilter:!1,filters:["id","name","price","time"],nPage:[],operators:{equal_to:"=",less_than:"<",greater_than:">",like:"LIKE",in:"IN",not_in:"NOT_IN",between:"BETWEEN"},params:{page:1,per_page:1,sort_column:"id",direction:"desc",search_column:"id",search_operator:"equal_to",search_query_1:"",search_query_2:""}}},props:{},created(){this.getAll()},mounted(){},methods:{clickCallback(e){this.page.pageCount=e-1},prev(){this.model.prev_page_url&&(this.params.page--,this.getAll())},next(){this.model.next_page_url&&(this.params.page--,this.getAll())},async getAll(){await this.$request.get(this.builUrl()).then((e=>{this.products=e.data,this.products=this.products.reverse()}))},builUrl(){return"http://localhost:8000/api/products"},onDelete(e){this.$swal.fire({title:"Delete?",text:"You won't be able to revert this!",icon:"question",type:"warning",showDenyButton:!1,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel please!",timer:5e3}).then((t=>{t.isConfirmed&&this.$request.delete(`http://localhost:8000/api/products/${e}`).then((e=>{e.data.success&&(this.$swal.fire("Đã Xóa","","success"),this.getAll())}))}))},sort:function(e){e===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=e},changeCurrentDir(){this.currentSortDir=-this.currentSortDir}},watch:{currentSortDir(e){console.log(this.products),this.products.sort(((e,t)=>this.currentSortDir))}},computed:{getFilter(){return this.products.filter((e=>""===this.search.minprice&&""===this.search.maxprice?e.name.toLowerCase().includes(this.search.name.toLowerCase())&&e.author.toLowerCase().includes(this.search.author.toLowerCase())&&e.price>=0:""!=this.search.minprice&&""===this.search.maxprice?e.name.toLowerCase().includes(this.search.name.toLowerCase())&&e.author.toLowerCase().includes(this.search.author.toLowerCase())&&e.price>=this.search.minprice:""===this.search.minprice&&""!=this.search.maxprice?e.name.toLowerCase().includes(this.search.name.toLowerCase())&&e.author.toLowerCase().includes(this.search.author.toLowerCase())&&e.price>=0&&e.price<=this.search.maxprice:""!=this.minprice&&""!=this.maxprice?e.name.toLowerCase().includes(this.search.name.toLowerCase())&&e.author.toLowerCase().includes(this.search.author.toLowerCase())&&e.price>=this.search.minprice&&e.price<=this.search.maxprice:void 0))},List(){return this.getFilter.length%this.page.per_page===0?this.page.count=Math.floor(this.getFilter.length/this.page.per_page):this.getFilter.length<=this.page.per_page?(this.page.count=Math.floor(this.getFilter.length/this.page.per_page+1),this.page.pageCount=0):this.page.pageCount>this.page.count-1?(this.page.count=Math.floor(this.getFilter.length/this.page.per_page)+1,this.page.pageCount=0):this.page.count=Math.floor(this.getFilter.length/this.page.per_page+1),this.getFilter.slice(this.page.per_page*this.page.pageCount,this.page.per_page*(this.page.pageCount+1))}}},n=c,l=a(3736),p=(0,l.Z)(n,s,r,!1,null,"11904490",null),h=p.exports},737:function(e,t,a){e.exports=a.p+"img/gai-xinh-1.2d0a2c7c.jpg"}}]);
//# sourceMappingURL=368.03ac6cb3.js.map