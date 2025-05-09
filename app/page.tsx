'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [activeSection, setActiveSection] = useState('intro');
    const [isLoaded, setIsLoaded] = useState(false);
    const [hoveredApproach, setHoveredApproach] = useState(null);
    const observerRefs = useRef({});
    const sectionRefs = useRef({});

    // Animation for floating app icons
    const appIcons = [
        { id: 1, color: 'bg-blue-500', delay: '0s', size: 'h-8 w-8' },
        { id: 2, color: 'bg-red-500', delay: '0.2s', size: 'h-10 w-10' },
        { id: 3, color: 'bg-green-500', delay: '0.4s', size: 'h-6 w-6' },
        { id: 4, color: 'bg-yellow-500', delay: '0.6s', size: 'h-9 w-9' },
        { id: 5, color: 'bg-purple-500', delay: '0.8s', size: 'h-7 w-7' },
        { id: 6, color: 'bg-pink-500', delay: '1s', size: 'h-8 w-8' },
        { id: 7, color: 'bg-indigo-500', delay: '1.2s', size: 'h-10 w-10' },
        { id: 8, color: 'bg-orange-500', delay: '1.4s', size: 'h-6 w-6' },
    ];

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 800);

        // Setup intersection observers for each section
        const sections = ['intro', 'approach1', 'approach2', 'approach3', 'conclusion'];

        sections.forEach((section) => {
            sectionRefs.current[section] = document.getElementById(section);

            observerRefs.current[section] = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(section);
                        }
                    });
                },
                { threshold: 0.5 },
            );

            if (sectionRefs.current[section]) {
                observerRefs.current[section].observe(sectionRefs.current[section]);
            }
        });

        return () => {
            // Cleanup observers
            sections.forEach((section) => {
                if (sectionRefs.current[section as keyof typeof sectionRefs.current] && 
                    observerRefs.current[section as keyof typeof observerRefs.current]) {
                    observerRefs.current[section as keyof typeof observerRefs.current].unobserve(
                        sectionRefs.current[section as keyof typeof sectionRefs.current]
                    );
                }
            });
            clearTimeout(timer);
        };
    }, [isLoaded]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden"
            data-oid="a7tosyq"
        >
            {/* Loading screen */}
            {!isLoaded && (
                <div
                    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
                    data-oid="0bg9pa-"
                >
                    <div className="flex flex-col items-center" data-oid="8c_us40">
                        <div
                            className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"
                            data-oid="-t5t-k1"
                        ></div>
                        <p className="mt-4 text-gray-600" data-oid=".x:qyfy">
                            Loading report...
                        </p>
                    </div>
                </div>
            )}

            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100"
                data-oid="dzbiokj"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="10p6jy1">
                    <div className="flex justify-between h-16" data-oid="rnt.cct">
                        <div className="flex items-center" data-oid="g5vrfdp">
                            <span
                                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                                data-oid="xw6cey3"
                            >
                                Mular × StarkNet
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8" data-oid="a0lg2w:">
                            <button
                                onClick={() => scrollToSection('intro')}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'intro' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                data-oid="4imld1j"
                            >
                                Introduction
                            </button>
                            <button
                                onClick={() => scrollToSection('approach1')}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'approach1' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                data-oid="2zpvhrh"
                            >
                                Approach 1
                            </button>
                            <button
                                onClick={() => scrollToSection('approach2')}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'approach2' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                data-oid="gytqvm6"
                            >
                                Approach 2
                            </button>
                            <button
                                onClick={() => scrollToSection('approach3')}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'approach3' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                data-oid="cvhu8lo"
                            >
                                Approach 3
                            </button>
                            <button
                                onClick={() => scrollToSection('conclusion')}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'conclusion' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                                data-oid="4wffz0u"
                            >
                                Conclusion
                            </button>
                        </div>
                        <div className="flex items-center" data-oid="gmmzcqb">
                            <button
                                className="ml-4 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                                data-oid="k4-1:_:"
                                onClick={() => window.open('https://docs.google.com/document/d/1KLfcefZmEIjGgaOf31JPAVbESSMKOFfLO0i2K-uTs1A/edit?tab=t.0', '_blank')}
                            >
                                View Report
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                data-oid="_cikuy7"
            >
                <div className="max-w-7xl mx-auto" data-oid="2j_sv7.">
                    <div className="relative z-10" data-oid="dp-8wuy">
                        <h1
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]"
                            data-oid="1uqwb6a"
                        >
                            Exploring Synergies: <br data-oid="m_qg3-c" />
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                                data-oid="kt869mr"
                            >
                                Mular + StarkNet
                            </span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]"
                            data-oid="m._3crm"
                        >
                            Integrating Mular and StarkNet for Enhanced Digital Payments in Nigeria
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]"
                            data-oid="4ke9o6z"
                        >
                            <button
                                onClick={() => scrollToSection('approach1')}
                                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                                data-oid="p7hqp7m"
                            >
                                Explore Integration Approaches
                            </button>
                            <button
                                className="px-8 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-all transform hover:-translate-y-1"
                                data-oid="t:3n41q"
                                 onClick={() => window.open('https://mular.co', '_blank')}
                            >
                                Learn About Mular
                            </button>
                        </div>
                    </div>

                    {/* Floating app icons */}
                    <div className="absolute inset-0 overflow-hidden" data-oid="b:n66w:">
                        {appIcons.map((icon) => (
                            <div
                                key={icon.id}
                                className={`absolute rounded-xl ${icon.color} ${icon.size} opacity-80`}
                                style={{
                                    left: `${Math.random() * 80 + 10}%`,
                                    top: `${Math.random() * 80 + 10}%`,
                                    animation: `float 10s infinite ease-in-out, fadeIn 0.5s ${icon.delay} forwards`,
                                    opacity: 0,
                                }}
                                data-oid=".1e0ji:"
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section
                id="intro"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
                data-oid="t207f4m"
            >
                <div className="max-w-7xl mx-auto" data-oid="07308e9">
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="x9_r9jr">
                        <div data-oid="2f8iq.i">
                            <h2
                                className="text-3xl font-bold mb-6 opacity-0 animate-[fadeInUp_0.8s_forwards]"
                                data-oid="yf3huye"
                            >
                                Introduction
                            </h2>
                            <div
                                className="space-y-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]"
                                data-oid="ibvb_li"
                            >
                                <div
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                    data-oid="oikz9tw"
                                >
                                    <h3 className="text-lg font-semibold mb-2" data-oid="fesalyu">
                                        Purpose of the Report
                                    </h3>
                                    <p className="text-gray-600" data-oid="0kr.mie">
                                        This report explores potential integration strategies
                                        between Mular.co and StarkNet, outlining three approaches
                                        with their respective advantages and disadvantages.
                                    </p>
                                </div>

                                <div
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                    data-oid="cs88m72"
                                >
                                    <h3 className="text-lg font-semibold mb-2" data-oid="dr13ma-">
                                        About Mular
                                    </h3>
                                    <p className="text-gray-600" data-oid="pnn3.ip">
                                        Mular.co is a fintech platform simplifying cryptocurrency
                                        use for everyday transactions in Nigeria. It enables users
                                        to convert cryptocurrencies like USDT, USDC, BTC, ETH, and
                                        others to Nigerian Naira (NGN) and vice versa.
                                    </p>
                                </div>

                                <div
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                    data-oid="f77laki"
                                >
                                    <h3 className="text-lg font-semibold mb-2" data-oid="vd7r8ip">
                                        About StarkNet
                                    </h3>
                                    <p className="text-gray-600" data-oid="sa15ql5">
                                        StarkNet is a permissionless Decentralized ZK-Rollup (Layer
                                        2) operating on the Ethereum blockchain. It achieves higher
                                        transaction throughput and lower gas fees without
                                        compromising security and decentralization.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative h-96 opacity-0 animate-[fadeIn_1s_0.4s_forwards]"
                            data-oid="vn9wba7"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden"
                                data-oid="4y--tfb"
                            >
                                <div
                                    className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-20 -top-10 -left-10"
                                    data-oid="2_.1cml"
                                ></div>
                                <div
                                    className="absolute w-60 h-60 bg-purple-500 rounded-full opacity-20 -bottom-20 -right-20"
                                    data-oid="1wkx:o3"
                                ></div>

                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center"
                                    data-oid="3v-_aw8"
                                >
                                    <div
                                        className="w-16 h-16 rounded-full bg-blue-600 mb-4 flex items-center justify-center"
                                        data-oid="g:9f0uu"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid=".qd3qhf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                                data-oid="9_jom2u"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-center"
                                        data-oid="wcy49p8"
                                    >
                                        Mular + StarkNet
                                    </h3>
                                    <p
                                        className="text-gray-500 text-center mt-2"
                                        data-oid="7fvyy:u"
                                    >
                                        Enhancing Digital Payments in Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach 1 Section */}
            <section id="approach1" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="l.c:qyw">
                <div className="max-w-7xl mx-auto" data-oid="9md-iof">
                    <h2 className="text-3xl font-bold mb-12 text-center" data-oid="jmgiagr">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
                            data-oid="t8cr8om"
                        >
                            Approach 1: Bridging Existing Assets
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="zn7s--1">
                        <div className="order-2 md:order-1" data-oid="h2ggu18">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105"
                                onMouseEnter={() => setHoveredApproach('approach1')}
                                onMouseLeave={() => setHoveredApproach(null)}
                                data-oid="::.pjvn"
                            >
                                <h3 className="text-xl font-bold mb-4" data-oid="q8whhs2">
                                    Bridging Existing Supported Assets to StarkNet
                                </h3>
                                <p className="text-gray-600 mb-6" data-oid="y-cnohp">
                                    This approach involves creating a pathway for users to move
                                    their existing digital assets from current networks to StarkNet,
                                    allowing them to benefit from StarkNet's faster transactions and
                                    lower fees.
                                </p>

                                <div className="space-y-4" data-oid="d-34inw">
                                    <div className="flex items-start" data-oid="w8_pv0m">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="t75bd5s"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="e.yut26"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="tf5rvfm"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="4dx9wpa">
                                            Access to StarkNet's scalability and lower fees
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="a5plh-d">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="3ks30jv"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="dvqs508"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="3fzumr5"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="g9:61bo">
                                            Expanded ecosystem access to StarkNet dApps
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="c3tudi_">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid=".gdzsw9"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid=".nqi5:j"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="1dy-_8c"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="zg2w::1">
                                            Reliance on bridge security and additional fees
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="2.23b4.">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid="wigsy43"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="o-i4264"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="chy6._-"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="53wi95o">
                                            Doesn't directly involve native StarkNet assets
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 relative h-80" data-oid="c_i3-xe">
                            <div
                                className={`absolute inset-0 bg-blue-50 rounded-3xl overflow-hidden transition-all duration-500 ${hoveredApproach === 'approach1' ? 'scale-105' : ''}`}
                                data-oid="9xvhni2"
                            >
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs"
                                    data-oid="n-lxatc"
                                >
                                    <div className="relative" data-oid="ol7jyk7">
                                        <div
                                            className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                                            data-oid="q-m07i_"
                                        >
                                            <span
                                                className="text-blue-600 font-bold"
                                                data-oid="yj9e4q6"
                                            >
                                                ETH
                                            </span>
                                        </div>

                                        <div
                                            className="h-16 bg-white rounded-xl shadow-md flex items-center justify-center relative"
                                            data-oid="ri--ils"
                                        >
                                            <div
                                                className="absolute left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 top-0 rounded-t-xl"
                                                data-oid="773k.91"
                                            ></div>
                                            <span className="font-medium" data-oid="a_iz42p">
                                                StarkGate Bridge
                                            </span>

                                            <div
                                                className={`absolute left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 bottom-0 rounded-b-xl ${hoveredApproach === 'approach1' ? 'animate-pulse' : ''}`}
                                                data-oid="beboxtb"
                                            ></div>
                                        </div>

                                        <div
                                            className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
                                            data-oid="_qoulnm"
                                        >
                                            <span
                                                className="text-purple-600 font-bold"
                                                data-oid="y594_cq"
                                            >
                                                ETH
                                            </span>
                                        </div>

                                        <div
                                            className="absolute -left-24 -bottom-16 text-xs text-gray-500"
                                            data-oid="pn13zyu"
                                        >
                                            Ethereum L1
                                        </div>

                                        <div
                                            className="absolute -right-24 -bottom-16 text-xs text-gray-500"
                                            data-oid=".u7bpu2"
                                        >
                                            StarkNet L2
                                        </div>

                                        {hoveredApproach === 'approach1' && (
                                            <div
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                data-oid="7kq.-ro"
                                            >
                                                <div
                                                    className="w-4 h-4 bg-blue-500 rounded-full animate-ping"
                                                    data-oid="5:iciuz"
                                                ></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach 2 Section */}
            <section
                id="approach2"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
                data-oid="0i_ditm"
            >
                <div className="max-w-7xl mx-auto" data-oid="1.tzysu">
                    <h2 className="text-3xl font-bold mb-12 text-center" data-oid="vis2w3j">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
                            data-oid="l2_vums"
                        >
                            Approach 2: Supporting Native StarkNet Assets
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="8a4pk2o">
                        <div className="relative h-80" data-oid="v3o:h7q">
                            <div
                                className={`absolute inset-0 bg-purple-50 rounded-3xl overflow-hidden transition-all duration-500 ${hoveredApproach === 'approach2' ? 'scale-105' : ''}`}
                                data-oid=":ap9ek_"
                            >
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs"
                                    data-oid="xc7biwd"
                                >
                                    <div
                                        className="bg-white rounded-xl shadow-md p-6 relative"
                                        data-oid="p29n.oy"
                                    >
                                        <div
                                            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg"
                                            data-oid="04ehgpx"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="zb--hfv"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                    data-oid="xf0z4wk"
                                                />
                                            </svg>
                                        </div>

                                        <h3
                                            className="text-center font-bold mt-4 mb-2"
                                            data-oid="fc2aby7"
                                        >
                                            StarkNet Wallet
                                        </h3>

                                        <div
                                            className="flex justify-center space-x-3 mt-4"
                                            data-oid="4.wuv0z"
                                        >
                                            <div
                                                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
                                                data-oid="m4e7:_1"
                                            >
                                                <span
                                                    className="text-purple-600 text-xs font-bold"
                                                    data-oid="xwuz7je"
                                                >
                                                    ETH
                                                </span>
                                            </div>
                                            <div
                                                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
                                                data-oid="kg-5e4z"
                                            >
                                                <span
                                                    className="text-purple-600 text-xs font-bold"
                                                    data-oid=".qk7j9v"
                                                >
                                                    STRK
                                                </span>
                                            </div>
                                            <div
                                                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
                                                data-oid="3_t7ce7"
                                            >
                                                <span
                                                    className="text-purple-600 text-xs font-bold"
                                                    data-oid="ow:64d4"
                                                >
                                                    +
                                                </span>
                                            </div>
                                        </div>

                                        {hoveredApproach === 'approach2' && (
                                            <div
                                                className="mt-4 flex justify-center"
                                                data-oid="tlev.sf"
                                            >
                                                <div
                                                    className="px-4 py-2 bg-purple-600 text-white text-xs rounded-full animate-pulse"
                                                    data-oid="t1z1oum"
                                                >
                                                    Native Assets
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-oid=".1o.rm6">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105"
                                onMouseEnter={() => setHoveredApproach('approach2')}
                                onMouseLeave={() => setHoveredApproach(null)}
                                data-oid="q7zi4o5"
                            >
                                <h3 className="text-xl font-bold mb-4" data-oid="qfzjwyd">
                                    Supporting Native StarkNet Assets
                                </h3>
                                <p className="text-gray-600 mb-6" data-oid="gt-rus6">
                                    This approach involves directly supporting cryptocurrencies and
                                    tokens that were created and exist on the StarkNet network,
                                    allowing users to hold, send, and receive these native digital
                                    assets.
                                </p>

                                <div className="space-y-4" data-oid="9p.:fv5">
                                    <div className="flex items-start" data-oid="va.2:m1">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="wxy21x1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="bs8juyk"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="so0w9ay"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="ev359gq">
                                            Smoother StarkNet experience with native assets
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="4v8osrk">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="rhczuvx"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="17v2ubt"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="xbepkrr"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="y41d66t">
                                            Full participation in the StarkNet ecosystem
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="y_f26wn">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid="l2_u:os"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="_21mff-"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="iy2sab_"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="2v5r.je">
                                            StarkNet ecosystem still maturing
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="ib3:dn1">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid="kp-k.b_"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="wje1lrv"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="9sc5y-j"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="f.rppea">
                                            Requires new infrastructure and integrations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach 3 Section */}
            <section id="approach3" className="py-20 px-4 sm:px-6 lg:px-8" data-oid="v6dftxv">
                <div className="max-w-7xl mx-auto" data-oid="nwk_j.t">
                    <h2 className="text-3xl font-bold mb-12 text-center" data-oid="rmb7q:2">
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
                            data-oid="ccc1y2j"
                        >
                            Approach 3: Hybrid Approach
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="3g17kjg">
                        <div className="order-2 md:order-1" data-oid="qm:o6u1">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105"
                                onMouseEnter={() => setHoveredApproach('approach3')}
                                onMouseLeave={() => setHoveredApproach(null)}
                                data-oid="-gbbk7k"
                            >
                                <h3 className="text-xl font-bold mb-4" data-oid=".x6qiw:">
                                    Hybrid Approach: Selective Bridging and Native Support
                                </h3>
                                <p className="text-gray-600 mb-6" data-oid="urgbt9r">
                                    This "best of both worlds" approach combines selective bridging
                                    of familiar assets with gradual support for native StarkNet
                                    assets, allowing users to experience immediate benefits while
                                    positioning for future ecosystem growth.
                                </p>

                                <div className="space-y-4" data-oid="rpob0-3">
                                    <div className="flex items-start" data-oid="-8xshyr">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="_3cntl1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="vrelqnh"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="2.vvrpr"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="9c75w_i">
                                            Early access with familiar assets and future-proofing
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="9uxd15o">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                            data-oid="eddi5o."
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="t53ifll"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                    data-oid="z3d3xfb"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="pwxt1p6">
                                            Flexibility to adapt based on ecosystem trends
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="mke6pf6">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid="jvifv_1"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="2wcq1t3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="njdw1az"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="l8kep3w">
                                            Increased development complexity
                                        </p>
                                    </div>

                                    <div className="flex items-start" data-oid="utpb6g5">
                                        <div
                                            className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3"
                                            data-oid="0xe8tco"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="86azerv"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                    data-oid="ror4yij"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600" data-oid="vo.tzvj">
                                            Naira conversion complexity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 relative h-80" data-oid="kn_huh_">
                            <div
                                className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden transition-all duration-500 ${hoveredApproach === 'approach3' ? 'scale-105' : ''}`}
                                data-oid="xt-jg05"
                            >
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs"
                                    data-oid="e4cj8c9"
                                >
                                    <div className="relative" data-oid="1vu9o:n">
                                        <div className="grid grid-cols-2 gap-4" data-oid=":iphfdz">
                                            <div
                                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
                                                data-oid="f6-3tru"
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2"
                                                    data-oid="f:wz8uk"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-blue-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="hheva.0"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m-4 6H4m0 0l4 4m-4-4l4-4"
                                                            data-oid="6yvd.cg"
                                                        />
                                                    </svg>
                                                </div>
                                                <span
                                                    className="text-xs font-medium"
                                                    data-oid="_bmb_xt"
                                                >
                                                    Bridging
                                                </span>
                                                {hoveredApproach === 'approach3' && (
                                                    <div
                                                        className="w-full h-1 bg-blue-500 mt-2 animate-pulse rounded-full"
                                                        data-oid="qcaogle"
                                                    ></div>
                                                )}
                                            </div>

                                            <div
                                                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
                                                data-oid="dmpbmmp"
                                            >
                                                <div
                                                    className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2"
                                                    data-oid="wjo:5f_"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-green-600"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="ckz46t8"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                            data-oid="b.w1r0r"
                                                        />
                                                    </svg>
                                                </div>
                                                <span
                                                    className="text-xs font-medium"
                                                    data-oid="8dmx5k8"
                                                >
                                                    Native Assets
                                                </span>
                                                {hoveredApproach === 'approach3' && (
                                                    <div
                                                        className="w-full h-1 bg-green-500 mt-2 animate-pulse rounded-full"
                                                        data-oid="mr1lmf-"
                                                    ></div>
                                                )}
                                            </div>
                                        </div>

                                        {hoveredApproach === 'approach3' && (
                                            <div
                                                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs px-4 py-2 rounded-full animate-bounce"
                                                data-oid=".5ppy57"
                                            >
                                                Best of both worlds
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section
                id="conclusion"
                className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
                data-oid="bx9e7lo"
            >
                <div className="max-w-7xl mx-auto" data-oid="knnz7-z">
                    <h2 className="text-3xl font-bold mb-12 text-center" data-oid="6y5b0dv">
                        Conclusion
                    </h2>

                    <div
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto"
                        data-oid="z6yu65p"
                    >
                        <p className="text-gray-600 mb-6" data-oid="-lwtkdm">
                            The potential integration between Mular and StarkNet presents various
                            opportunities to shape the future of digital payments, particularly
                            within the Nigerian context. StarkNet's focus on scalability and Mular's
                            established presence and understanding of the local payment ecosystem
                            offer a basis for exploring synergies.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl mb-6" data-oid="ljr-nyl">
                            <h3 className="text-lg font-semibold mb-4" data-oid="fpi_les">
                                Approach Comparison
                            </h3>
                            <div className="space-y-4" data-oid="wwmwer2">
                                <div className="flex items-start" data-oid="bwynyvq">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3"
                                        data-oid=".t_panx"
                                    >
                                        <span
                                            className="text-blue-600 font-bold"
                                            data-oid="kztbefe"
                                        >
                                            1
                                        </span>
                                    </div>
                                    <div data-oid="j0v_h57">
                                        <p className="font-medium" data-oid="__8fkb6">
                                            Bridging Existing Assets
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="_ulphzv">
                                            Quick implementation, limited to existing assets
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start" data-oid="ll.v43y">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3"
                                        data-oid="wcam-yy"
                                    >
                                        <span
                                            className="text-purple-600 font-bold"
                                            data-oid="f2a4gu7"
                                        >
                                            2
                                        </span>
                                    </div>
                                    <div data-oid="11n3aqk">
                                        <p className="font-medium" data-oid="9szoga-">
                                            Supporting Native StarkNet Assets
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="ae14wkl">
                                            Deep integration, higher development effort
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start" data-oid="g8rjp1u">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3"
                                        data-oid="3759hav"
                                    >
                                        <span
                                            className="text-green-600 font-bold"
                                            data-oid=":oh0keu"
                                        >
                                            3
                                        </span>
                                    </div>
                                    <div data-oid="1jsocp8">
                                        <p className="font-medium" data-oid="anxix:q">
                                            Hybrid Approach
                                        </p>
                                        <p className="text-sm text-gray-500" data-oid="98i:omo">
                                            Balanced solution, phased implementation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600" data-oid="ai00w2x">
                            The feasibility and impact of each approach will depend on factors such
                            as technological integration efforts, user adoption, and the evolving
                            landscapes of both the StarkNet ecosystem and the Nigerian regulatory
                            environment. Further evaluation and discussion between Mular and
                            StarkNet would be beneficial to determine the most strategic and
                            practical path forward for potential collaboration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
                <div className="max-w-7xl mx-auto">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Mular × StarkNet Integration Report. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Custom Styles */}
            <style jsx data-oid="32j2275">{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    );
}
