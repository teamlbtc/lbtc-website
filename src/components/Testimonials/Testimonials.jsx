import React from 'react'


function Testimonials(){
    return(


        <div className='App'>


        <section>
                <div class="block remove-gap gray-grdnt-bg">
                    <div class="container">
                        <div class="sec-ttl text-center">
                            <div class="sec-ttl-inr">
                                <h2 itemprop="headline">Fundraising Campaigns</h2>
                                <span>Technology that made they in social fundraising</span>
                                <i class="flaticon-sweat thm-clr"></i>
                            </div>
                        </div>
                        <div class="testi-wrp">
                            <div class="testi-car owl-carousel">
                                <div class="testi-itm">
                                    <img src={require('../../assets/images/resources/testi-img1.jpg')} alt="testi-img1.jpg" itemprop="image" />
                                    <div class="testi-inf">
                                        <h4 itemprop="headline">Maria Rose</h4>
                                        <p itemprop="description">people whose lives have been upended by war, conflict and natural disasters</p>
                                    </div>
                                </div>
                                <div class="testi-itm">
                                <img src={require('../../assets/images/resources/testi-img2.jpg')} alt="testi-img2.jpg" itemprop="image" />
                                    <div class="testi-inf">
                                        <h4 itemprop="headline">James Thomas</h4>
                                        <p itemprop="description">people whose lives have been upended by war, conflict and natural disasters</p>
                                    </div>
                                </div>
                                <div class="testi-itm">
                                <img src={require('../../assets/images/resources/testi-img3.jpg')} alt="testi-img3.jpg" itemprop="image" />
                                    <div class="testi-inf">
                                        <h4 itemprop="headline">Walkar Rose</h4>
                                        <p itemprop="description">people whose lives have been upended by war, conflict and natural disasters</p>
                                    </div>
                                </div>
                                <div class="testi-itm">
                                <img src={require('../../assets/images/resources/testi-img4.jpg')} alt="testi-img4.jpg" itemprop="image" />
                                    <div class="testi-inf">
                                        <h4 itemprop="headline">Rakki Jannie</h4>
                                        <p itemprop="description">people whose lives have been upended by war, conflict and natural disasters</p>
                                    </div>
                                </div>
                                <div class="testi-itm">
                                <img src={require('../../assets/images/resources/testi-img5.jpg')} alt="testi-img5.jpg" itemprop="image" />
                                    <div class="testi-inf">
                                        <h4 itemprop="headline">Mia Queen</h4>
                                        <p itemprop="description">people whose lives have been upended by war, conflict and natural disasters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
    )

}

export default Testimonials;