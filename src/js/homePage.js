import axios from "axios";
import { mapGetters } from "vuex"
export default {
    name: "HomePage",
    data() {
        return {
            postLists: {},
            categoryLists: {},
            searchKey: "",
            tokenStatus: false,
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"])
    },
    methods: {

        // propage() {
        //     window.location.href = "api/profile/page"
        // },
        getAllPost() {
            axios.get("http://localhost:8000/api/allPostList").then((response) => {
                // console.log(response.data.post);
                // this.postLists = response.data.post;
                // console.log(response.data.post.length);

                for (let i = 0; i < response.data.post.length; i++) {
                    if (response.data.post[i].image != null) {
                        response.data.post[i].image = "http://localhost:8000/postImage/" + response.data.post[i].image;
                    } else {
                        response.data.post[i].image = "http://localhost:8000/default_image/default-image.jpg"
                    }
                }
                this.postLists = response.data.post;
            });
        },

        loadCategory() {
            axios.get('http://localhost:8000/api/allCategory').then((response) => {
                this.categoryLists = response.data.category;
            }).catch((e) => console.log(e));
        },

        search() {
            let search = {
                key: this.searchKey,
            };

            axios.post("http://localhost:8000/api/post/search", search)
                .then((response) => {
                    for (let i = 0; i < response.data.searchData.length; i++) {
                        if (response.data.searchData[i].image != null) {
                            response.data.searchData[i].image = "http://localhost:8000/postImage/" + response.data.searchData[i].image;
                        } else {
                            response.data.searchData[i].image = "http://localhost:8000/default_image/default-image.jpg"
                        }
                    }
                    this.postLists = response.data.searchData;
                });
        },

        categorySearch(searchKey) {
            let search = {
                key: searchKey
            };
            axios.post("http://localhost:8000/api/category/search", search).then((response) => {
                for (let i = 0; i < response.data.result.length; i++) {
                    if (response.data.result[i].image != null) {
                        response.data.result[i].image = "http://localhost:8000/postImage/" + response.data.result[i].image;
                    } else {
                        response.data.result[i].image = "http://localhost:8000/default_image/default-image.jpg"
                    }
                }
                this.postLists = response.data.result;
            }).catch((error) => console.log(error))
        },

        newsDetails(postId) {
            this.$router.push({
                name: "newsDetails",
                params: {
                    id: postId,
                },
            });
        },

        home() {
            this.$router.push({
                name: 'home'
            })
        },

        login() {
            this.$router.push({
                name: 'loginPage'
            })
        },

        logout() {
            this.$store.dispatch("setToken", null);
            this.login();
        },

        checkToken() {
            if (this.storageToken != null && this.storageToken != undefined && this.storageToken != '') {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false
            }
        }
    },
    mounted() {
        // console.log(this.storageToken);
        this.checkToken();
        this.getAllPost();
        this.loadCategory();
    }
}