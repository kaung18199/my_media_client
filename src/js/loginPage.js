import axios from "axios"
import { mapGetters } from "vuex"
export default {
    name: 'loginPage',
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            tokenStatus: false,
            userStatus: false
        }
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"])
    },
    methods: {
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
        accountLogin() {
            axios.post("http://localhost:8000/api/user/login", this.userData).then((response) => {
                if (response.data.token == null) {
                    this.userStatus = true;
                } else {
                    this.storeUserInfo(response);
                    this.home();
                }
            }).catch((error) => console.log(error))
        },
        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user)
        }
    }
}