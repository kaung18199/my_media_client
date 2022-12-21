<template>
    <div>
        <div class="d-flex justify-content-center py-3">
            <!-- <p class=" btn btn-danger text-white me-4" @click="home()">Home</p>
            <p class="btn bg-dark text-white" @click="login()">Login</p> -->
          </div>
        <main>
            <!-- About US Start -->
            <div class="about-area">
                <div class="container">
                        <!-- Hot Aimated News Tittle-->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="trending-tittle">
                                    <!-- <strong>Trending now</strong> -->
                                    <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                    <div class="trending-animated">
                                        <ul id="js-news" class="js-hidden">
                                            <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                            <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                            <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                        </ul>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                       <div class="row">
                            <div class="col-lg-8">
                                <!-- Trending Tittle -->
                                <div class="about-right mb-90">
                                    <div class="about-img">
                                        <img :src="posts.image" alt="">
                                    </div>
                                    <div class="section-tittle mb-30 pt-30">
                                        <h3>{{ posts.title }}</h3>
                                    </div>
                                    <div class="about-prea">
                                        <p class="about-pera1 mb-25">{{ posts.description }}</p>
                                        
                                    </div>
                                    <div class="social-share pt-30">
                                        <div class="section-tittle">
                                            <!-- <h3 class="mr-20">Share:</h3> -->
                                            <h5 class=" bg-dark rounded p-3 text-white"><i class="fa-solid fa-eye"></i><span class="ms-2">{{ viewCount }}</span></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- From -->
                                <div class="row">
                                    <div class="col-lg-8">
                                            
                                            <div class=" mt-1">
                                                <button type="submit" class="button button-contactForm boxed-btn mb-3" @click="back()">Back</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <!-- Section Tittle -->
                                <div class="section-tittle mb-40">
                                    <h3>Follow Us</h3>
                                </div>
                                <!-- Flow Socail -->
                                <div class="single-follow mb-45">
                                    <div class="single-box">
                                        <div class="follow-us d-flex align-items-center">
                                            <div class="follow-social">
                                                <a href="#"><img src="../../public/assets/img/news/icon-fb.png" alt=""></a>
                                            </div>
                                            <div class="follow-count">  
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div> 
                                        <div class="follow-us d-flex align-items-center">
                                            <div class="follow-social">
                                                <a href="#"><img src="../../public/assets/img/news/icon-tw.png" alt=""></a>
                                            </div>
                                            <div class="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                            <div class="follow-us d-flex align-items-center">
                                            <div class="follow-social">
                                                <a href="#"><img src="../../public/assets/img/news/icon-ins.png" alt=""></a>
                                            </div>
                                            <div class="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div class="follow-us d-flex align-items-center">
                                            <div class="follow-social">
                                                <a href="#"><img src="../../public/assets/img/news/icon-yo.png" alt=""></a>
                                            </div>
                                            <div class="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- New Poster -->
                                <div class="news-poster d-none d-lg-block">
                                    <img src="../../public/assets/img/news/news_card.jpg" alt="">
                                </div>
                            </div>
                       </div>
                </div>
            </div>
            <!-- About US End -->
        </main>
    </div>
</template>

<script src="../js/newsDetails.js"></script>
