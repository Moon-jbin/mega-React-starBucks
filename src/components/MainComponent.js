import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="section1">
            <div className="container">
                <span className="ani ani1"><img src="./img/뉴스타벅스/2022_NewYear_main_slogan.png" alt="이미지"/></span>
                <span className="ani ani2"><img src="./img/뉴스타벅스/2022_NewYear_main_new_year_citrus_tea.png" alt="이미지"/></span>
                <span className="ani ani3"><img src="./img/뉴스타벅스/2022_NewYear_main_lavender_beige_oat_latte.png" alt="이미지"/></span>
                <span className="ani ani4"><img src="./img/뉴스타벅스/2022_NewYear_main_dolce_black_milk_tea.png" alt="이미지"/></span>
                <span className="ani ani5"><a href="#!" className="more-btn">자세히 보기</a></span>
            </div>
                    </section>
                    <section id="section2">
            <div className="container">
                <div className="left">
                    <div className="left-box">
                        <div className="notice-title">
                            <h2 className="blind">공지사항</h2>
                        </div>
                        <div className="notice-list">
                            <ul>
                                <li className="notice-list-item"><a href="#!">Gift배송하기 서비스 배송지연 안내</a></li>
                                <li className="notice-list-item"><a href="#!">홈페이지 이용약관 / 스타벅스 카드 이용약관 개정 안내</a></li>
                                <li className="notice-list-item"><a href="#!">제25기 정기주주총회 권리행사 기준일 공고</a></li>
                                <li className="notice-list-item"><a href="#!">시스템 개선 및 점검 안내</a></li>
                                <li className="notice-list-item"><a href="#!">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                            </ul>
                        </div>
                        {/* <!-- 더보기 --> */}
                        <div className="notice-more">
                            <a href="#!" className="more-btn" title="Notice More View">
                                <img src="./img/뉴스타벅스/btn_notice_plus.png" alt="notice-more-btn"/>
                            </a>
                        </div>
                    </div>
                </div>        
                <div className="right">
                    <div className="promotion">
                        <a href="#!" className="promotion-btn blind" title="스타벅스 프로모션">스타벅스 프로모션</a>
                    </div>
                </div>        
            </div>
                    </section>
                    <section id="section3">
            <div className="container">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide3"><div><img src="./img/뉴스타벅스/slide_03.jpg" alt="슬라이드이미지"/></div></li>
                            <li className="slide slide1"><div><img src="./img/뉴스타벅스/slide_01.jpg" alt="슬라이드이미지"/></div></li>
                            <li className="slide slide2"><div><img src="./img/뉴스타벅스/slide_02.jpg" alt="슬라이드이미지"/></div></li>
                            <li className="slide slide3"><div><img src="./img/뉴스타벅스/slide_03.jpg" alt="슬라이드이미지"/></div></li>
                            <li className="slide slide1"><div><img src="./img/뉴스타벅스/slide_01.jpg" alt="슬라이드이미지"/></div></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- 페이지버튼 --> */}
                <ul className="page-btn-box">
                    <li><a href="#!" className="play-btn">{/*버튼*/}</a></li>
                    <li><a href="#!" className="page-btn addPage">{/*버튼*/}</a></li>
                    <li><a href="#!" className="page-btn">{/*비어있음*/}</a></li>
                    <li><a href="#!" className="page-btn">{/*비어있음*/}</a></li>
                </ul>

                {/* <!-- 좌우 화살표 버튼 --> */}
                <span className="prev-btn-arrow">
                    <a href="#!" className="prev-btn blind">prev-btn</a>
                </span>
                <span className="next-btn-arrow">
                    <a href="#!" className="next-btn blind">next-btn</a>
                </span>

            </div>
                    </section>
                    <section id="section4">
            <div className="container">
                <div className="left">
                    <img src="./img/뉴스타벅스/rewards-logo.png" alt="rewards-logo"/>
                </div>
                <div className="right">
                    <div className="top">
                        <h2>
                            <span>스타벅스만의 특별한 혜택,</span><strong>스타벅스 리워드</strong>
                        </h2>
                        <div>
                            <h3 className="pc">     {/* <!--헤딩태그는 반드시 인라인태그만 가능--> */}
                                <strong>스타벅스 회원이세요?</strong>
                                <span>로그인을 통해 나만의 리워드를 확인해보세요.</span><br/>
                                <strong>스타벅스 회원 아니세요?</strong>                              
                                <span>가입을 통해 리워드 혜택을 즐기세요.</span>
                            </h3>
                            <h3 className="mobile">    {/*  <!--헤딩태그는 반드시 인라인태그만 가능--> */}
                                <strong>스타벅스 회원이세요?</strong><span>로그인을 통해<br/> 나만의 리워드를 확인해보세요.</span><br/>
                                <strong>스타벅스 회원 아니세요?</strong><br/><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                            </h3>
                            <span>
                                <a href="#!" className="sign-up">회원가입</a>
                                <a href="#!" className="sign-in">로그인</a>                                
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <h4 className="pc">
                           <span>회원 가입 후, 스타벅스 e-Gift Card를</span> <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong> <br/>
                            <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span> 
                        </h4>
                        <h4 className="mobile">
                            <span>회원 가입 후, 스타벅스 e-Gift Card를</span><br/> <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong> <br/>
                             <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span> 
                         </h4>
                        <span>
                            <a href="#!" className="gift-card">e-Gift Card 선물하기</a>
                        </span>
                    </div>
                </div>
            </div>
                    </section>
                    <section id="section5">
            <div className="container">
                <div className="left">
                    <img src="./img/뉴스타벅스/2022_NewYear_bean_bean.png" alt="니카라과 블론드 로스트"
                    title="니카라과 블론드 로스트"/>
                </div>
                <div className="right">
                    <span>
                        <img className="pc" src="./img/뉴스타벅스/2022_NewYear_bean_txt.png" alt="니카라과 블론드 로스트" title="니카라과 블론드 로스트"/>
                        <img className="mobile" src="./img/뉴스타벅스/2022_m_NewYear_bean_txt.png" alt="니카라과 블론드 로스트" title="니카라과 블론드 로스트"/>
                        <a href="#!" className="more-view">자세히 보기</a>
                    </span>
                </div>
            </div>
                    </section>
                    <section id="section6"><div className="container"></div></section>
                    <section id="section7"><div className="container"></div></section>
                    <section id="section8"><div className="container"></div></section>
                    <section id="section9"><div className="container"></div></section>
                    </main>  
            </>
        );
    }
}

export default MainComponent;