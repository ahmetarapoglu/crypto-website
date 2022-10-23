import WhoPspayStyle from "./who-pspay.styled";
import Container from "@/components/utils/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import SectionTitle from "@/components/utils/section-title";
const WhoPspay = () => {
  return (
    <WhoPspayStyle>
      <SectionTitle
        title="Who Us"
        desc="Become a crypto owner in minutes using your debit or credit card."
      />
      <Container>
        <div className="who-us">
          <Swiper
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper"
          >
            <SwiperSlide>
              <h4>CEX.IO Made It Easy to Work and Earn With Crypto</h4>
              <p>
                Among the numerous websites providing Bitcoin exchange services,
                CEX.IO is an entire ecosystem of products and services that
                allow customers to engage with the decentralized economy from
                various aspects. The positive reputation of CEX.IO and market
                tenure make it worth the trust of customers all over the world.
                With a client base of over 4,000,000, the platform is recognized
                as the trading company that can be relied on. Our customers know
                what it means to work with a regulated platform that has a
                substantial history, a deep understanding of the market and
                customers’ needs. We are constantly working on enhancing
                security and adapting our systems to the latest regulatory
                requirements. Compliance with the international standards allows
                us to implement numerous payment options and work with reliable
                banks and payment providers. CEX.IO is also regularly expanding
                the list of cryptocurrencies. Still, every cryptocurrency has to
                pass a thorough verification to be listed. Our due diligence and
                concerns about the quality of the service pay off. Now, we are
                moving forward to achieve the status of the best cryptocurrency
                exchange.
              </p>
              <h4>
                Buy, Sell, and Trade Crypto Easily with Professional Crypto
                Trading Platform
              </h4>
              <p>
                Looking for a reliable online exchange might be a complicated
                task. Thus, trusting a platform with extensive coverage and a
                positive reputation among its users might save your time. CEX.IO
                products, including the Bitcoin and crypto trading platform,
                combines the crucial features: enhanced security, variety of
                services, and high market liquidity. The team applies every
                effort to make your trading on the platform as convenient and
                safe as possible.
              </p>
              <h4>Quickly Buy Crypto with Card</h4>
              <p>
                We know that sometimes deep dive into the crypto economy may
                mean some technical barriers. Sometimes it can be difficult to
                deal with blockchain transactions and crypto trading procedures.
                So we’ve designed the Instant Buy service to allow customers to
                easily enter digital finance and use its benefits. To buy
                Bitcoin and 70+ cryptocurrencies on CEX.IO, you just need an
                account and credit card. When you decide how much crypto to buy,
                simply enter your card details or use funds you have on your
                account at the moment. Then confirm the purchase and the desired
                amount of digital coins will appear on your CEX.IO balance
                instantly. This way customers can buy Ethereum (ETH), Ripple
                (XRP), Litecoin (LTC), and many other virtual currencies,
                including numerous native tokens of emerging DeFi projects.
              </p>
              <h4>Sell Crypto and Get Instant Cash</h4>
              <p>
                When you need money urgently, you can sell Bitcoins for cash
                using our mobile app and get funds directly to your linked card.
                The Instant Sell option is available on the Buy/Sell menu and
                allows you to convert your digital funds into real ones in a
                matter of seconds.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </WhoPspayStyle>
  );
};

export default WhoPspay;
