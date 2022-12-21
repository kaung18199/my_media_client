import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: 'NewsDetails',
    data() {
        return {
            postId: 0,
            posts: {},
            viewCount: 0
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"])
    },
    methods: {

        loadPost(id) {
            let post = {
                postId: id,
            }
            axios.post("http://localhost:8000/api/post/details", post)
                .then((response) => {
                    // console.log(response.data.post);
                    if (response.data.post.image != null) {
                        response.data.post.image = "http://localhost:8000/postImage/" + response.data.post.image;
                    } else {
                        response.data.post.image = "http://localhost:8000/default_image/default-image.jpg"
                    }
                    this.posts = response.data.post;
                });
        },
        back() {
            history.back();
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
        viewCountLoad() {
            let data = {
                user_id: this.storageUserData.id,
                post_id: this.$route.params.id,
            };
            axios.post("http://localhost:8000/api/post/actionLog", data).then((response) =>
                this.viewCount = response.data.post.length);
        }
    },
    mounted() {
        this.viewCountLoad();
        this.postId = this.$route.params.id;
        this.loadPost(this.postId)
    }
}