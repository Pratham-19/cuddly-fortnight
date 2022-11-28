import Head from "next/head";
import ServiceOne from "../components/services/ServiceOne";
import TeamOne from "../components/teams/TeamOne";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import ContactOne from "../components/contact/ContactOne";
import BannerTwo from "../components/banners/BannerTwo";
import Layout from "../components/layouts/Layout";
import BannerOne from "../components/banners/BannerOne";

const HomeThree = () => {
    const layoutSettings = {
        header: {
            style: "three",
            leftColumn: "col-lg-4 col-md-6 col-sm-6 col-8 header-left",
            rightColumn: "col-lg-8 col-md-6 col-sm-6 col-4 header-right",
        },
        footer: {
            showCopyrightOnly: false,
        },
    };

    return (
        <Layout layoutSettings={layoutSettings}>
            <Head>
                <title>Home 03 || keystroke Creative Agency Bootstrap5 Template</title>
            </Head>

            <main className="page-wrapper">
                <BannerOne />
                <ServiceOne />
                <TeamOne />
                <PortfolioOne />
                <BannerTwo />
                <ContactOne />
            </main>
        </Layout>
    );
};

export default HomeThree;
