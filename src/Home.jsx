import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BackgroundImage from "./Images/Backgroundimage.jpeg";
import { Button, Form, Input, Select, message, Space } from "antd";
import { motion } from "framer-motion";
import "./App.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footerlogo from "./Images/Footerlogo.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import ISO from "./Images/ISOCertified.png";
import KHDA from "./Images/KHDA.png";
import IATA from "./Images/IATA.png";
import contactsvg from "./Images/Contactsvg.svg";
import Contactbanner from "./Images/Contactbanner.png";
import ElevateImage from "./Images/ElevateImage.png";
import travel from "./Images/travel-service.png";
import globe from "./Images/globe.png";
import traveldocument from "./Images/visa.png";
import exploretravel from "./Images/travel-and-tourism.png";
import customerservice from "./Images/passport.png";
import ticket from "./Images/travel.png";
import CourseContent from "./Images/CourseContent.jpg";
import CareerOpportunities from "./Images/CareerOpportunities.jpg";
import EntryQualification from "./Images/EntryQualificationImage.jpg";
import LearnerProfile from "./Images/LearnerImage.jpg";
import IATALogo from "./Images/IATALogo.png";
import CourseDescription from "./Images/CourseDescription.jpg";

export default function Home({ handleModalOpen }) {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const [selectWidth, setSelectWidth] = useState("30%");
  const [dropdownWidth, setDropdownWidth] = useState("30%");

  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounterVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  const handleFooterLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleEnquireClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    zeroElement: false,
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
    eigthElement: false,
    ninethElement: false,
    tenthElement: false,
    eleventhElement: false,
    twelfthElement: false,
    thirteenthElement: false,
  });

  const { ref: myRef0, inView: zeroElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.zeroElement) {
        setHasViewedSlide((prev) => ({ ...prev, zeroElement: true }));
      }
    },
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });
  const { ref: myRef8, inView: eigthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eigthElement) {
        setHasViewedSlide((prev) => ({ ...prev, eigthElement: true }));
      }
    },
  });
  const { ref: myRef9, inView: ninethElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.ninethElement) {
        setHasViewedSlide((prev) => ({ ...prev, ninethElement: true }));
      }
    },
  });
  const { ref: myRef10, inView: tenthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.tenthElement) {
        setHasViewedSlide((prev) => ({ ...prev, tenthElement: true }));
      }
    },
  });
  const { ref: myRef11, inView: eleventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eleventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, eleventhElement: true }));
      }
    },
  });

  const { ref: myRef12, inView: twelfthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.twelfthElement) {
        setHasViewedSlide((prev) => ({ ...prev, twelfthElement: true }));
      }
    },
  });

  const { ref: myRef13, inView: thirteenthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirteenthElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirteenthElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  const handleSubmit = (values) => {
    // Combine country code and phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    // Add fullPhoneNumber to the form data
    const updatedFormData = {
      ...values,
      phone: fullPhoneNumber,
    };

    // Log the final form data
    // console.log(updatedFormData);

    // Save to state (if needed)
    setFormData(updatedFormData);

    // Display success message
    message.success("Form submitted successfully!");

    // Reset the fields
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all form fields
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const fullPhoneNumber = value;
    // if (!fullPhoneNumber) {
    //   return Promise.reject(new Error("Please input your phone number!"));
    // }

    // Ensure the phone number does not exceed 15 digits
    if (fullPhoneNumber.replace(/\D/g, "").length > 15) {
      return Promise.reject(
        new Error("Phone number should not exceed 15 digits!")
      );
    }

    return Promise.resolve();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Small & medium devices
        setSelectWidth("37%");
        setDropdownWidth("70%");
      } else {
        // Large devices
        setSelectWidth("30%");
        setDropdownWidth("21%");
      }
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countryCodes = [
    { code: "+91", label: "India (+91)" },
    { code: "+1", label: "USA (+1)" },
    { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+213", label: "Algeria (+213)" },
    { code: "+376", label: "Andorra (+376)" },
    { code: "+244", label: "Angola (+244)" },
    { code: "+1264", label: "Anguilla (+1264)" },
    { code: "+1268", label: "Antigua & Barbuda (+1268)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+374", label: "Armenia (+374)" },
    { code: "+297", label: "Aruba (+297)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+43", label: "Austria (+43)" },
    { code: "+994", label: "Azerbaijan (+994)" },
    { code: "+1242", label: "Bahamas (+1242)" },
    { code: "+973", label: "Bahrain (+973)" },
    { code: "+880", label: "Bangladesh (+880)" },
    { code: "+1246", label: "Barbados (+1246)" },
    { code: "+375", label: "Belarus (+375)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+501", label: "Belize (+501)" },
    { code: "+229", label: "Benin (+229)" },
    { code: "+1441", label: "Bermuda (+1441)" },
    { code: "+975", label: "Bhutan (+975)" },
    { code: "+591", label: "Bolivia (+591)" },
    { code: "+387", label: "Bosnia Herzegovina (+387)" },
    { code: "+267", label: "Botswana (+267)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+673", label: "Brunei (+673)" },
    { code: "+359", label: "Bulgaria (+359)" },
    { code: "+226", label: "Burkina Faso (+226)" },
    { code: "+257", label: "Burundi (+257)" },
    { code: "+855", label: "Cambodia (+855)" },
    { code: "+237", label: "Cameroon (+237)" },
    { code: "+1", label: "Canada (+1)" },
    { code: "+238", label: "Cape Verde Islands (+238)" },
    { code: "+1345", label: "Cayman Islands (+1345)" },
    { code: "+236", label: "Central African Republic (+236)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+86", label: "China (+86)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+269", label: "Comoros (+269)" },
    { code: "+242", label: "Congo (+242)" },
    { code: "+682", label: "Cook Islands (+682)" },
    { code: "+506", label: "Costa Rica (+506)" },
    { code: "+385", label: "Croatia (+385)" },
    { code: "+53", label: "Cuba (+53)" },
    { code: "+90392", label: "Cyprus North (+90392)" },
    { code: "+357", label: "Cyprus South (+357)" },
    { code: "+42", label: "Czech Republic (+42)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+253", label: "Djibouti (+253)" },
    { code: "+1809", label: "Dominica (+1809)" },
    { code: "+1809", label: "Dominican Republic (+1809)" },
    { code: "+593", label: "Ecuador (+593)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+503", label: "El Salvador (+503)" },
    { code: "+240", label: "Equatorial Guinea (+240)" },
    { code: "+291", label: "Eritrea (+291)" },
    { code: "+372", label: "Estonia (+372)" },
    { code: "+251", label: "Ethiopia (+251)" },
    { code: "+500", label: "Falkland Islands (+500)" },
    { code: "+298", label: "Faroe Islands (+298)" },
    { code: "+679", label: "Fiji (+679)" },
    { code: "+358", label: "Finland (+358)" },
    { code: "+33", label: "France (+33)" },
    { code: "+594", label: "French Guiana (+594)" },
    { code: "+689", label: "French Polynesia (+689)" },
    { code: "+241", label: "Gabon (+241)" },
    { code: "+220", label: "Gambia (+220)" },
    { code: "+7880", label: "Georgia (+7880)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+233", label: "Ghana (+233)" },
    { code: "+350", label: "Gibraltar (+350)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+299", label: "Greenland (+299)" },
    { code: "+1473", label: "Grenada (+1473)" },
    { code: "+590", label: "Guadeloupe (+590)" },
    { code: "+671", label: "Guam (+671)" },
    { code: "+502", label: "Guatemala (+502)" },
    { code: "+224", label: "Guinea (+224)" },
    { code: "+245", label: "Guinea - Bissau (+245)" },
    { code: "+592", label: "Guyana (+592)" },
    { code: "+509", label: "Haiti (+509)" },
    { code: "+504", label: "Honduras (+504)" },
    { code: "+852", label: "Hong Kong (+852)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+354", label: "Iceland (+354)" },
    // { code: "+91", label: "India (+91)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+98", label: "Iran (+98)" },
    { code: "+964", label: "Iraq (+964)" },
    { code: "+353", label: "Ireland (+353)" },
    { code: "+972", label: "Israel (+972)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+1876", label: "Jamaica (+1876)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+962", label: "Jordan (+962)" },
    { code: "+7", label: "Kazakhstan (+7)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+686", label: "Kiribati (+686)" },
    { code: "+850", label: "Korea North (+850)" },
    { code: "+82", label: "Korea South (+82)" },
    { code: "+965", label: "Kuwait (+965)" },
    { code: "+996", label: "Kyrgyzstan (+996)" },
    { code: "+856", label: "Laos (+856)" },
    { code: "+371", label: "Latvia (+371)" },
    { code: "+961", label: "Lebanon (+961)" },
    { code: "+266", label: "Lesotho (+266)" },
    { code: "+231", label: "Liberia (+231)" },
    { code: "+218", label: "Libya (+218)" },
    { code: "+417", label: "Liechtenstein (+417)" },
    { code: "+370", label: "Lithuania (+370)" },
    { code: "+352", label: "Luxembourg (+352)" },
    { code: "+853", label: "Macao (+853)" },
    { code: "+389", label: "Macedonia (+389)" },
    { code: "+261", label: "Madagascar (+261)" },
    { code: "+265", label: "Malawi (+265)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+960", label: "Maldives (+960)" },
    { code: "+223", label: "Mali (+223)" },
    { code: "+356", label: "Malta (+356)" },
    { code: "+692", label: "Marshall Islands (+692)" },
    { code: "+596", label: "Martinique (+596)" },
    { code: "+222", label: "Mauritania (+222)" },
    { code: "+269", label: "Mayotte (+269)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+691", label: "Micronesia (+691)" },
    { code: "+373", label: "Moldova (+373)" },
    { code: "+377", label: "Monaco (+377)" },
    { code: "+976", label: "Mongolia (+976)" },
    { code: "+1664", label: "Montserrat (+1664)" },
    { code: "+212", label: "Morocco (+212)" },
    { code: "+258", label: "Mozambique (+258)" },
    { code: "+95", label: "Myanmar (+95)" },
    { code: "+264", label: "Namibia (+264)" },
    { code: "+674", label: "Nauru (+674)" },
    { code: "+977", label: "Nepal (+977)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+687", label: "New Caledonia (+687)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+505", label: "Nicaragua (+505)" },
    { code: "+227", label: "Niger (+227)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+683", label: "Niue (+683)" },
    { code: "+672", label: "Norfolk Islands (+672)" },
    { code: "+670", label: "Northern Marianas (+670)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+968", label: "Oman (+968)" },
    { code: "+680", label: "Palau (+680)" },
    { code: "+507", label: "Panama (+507)" },
    { code: "+675", label: "Papua New Guinea (+675)" },
    { code: "+595", label: "Paraguay (+595)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+1787", label: "Puerto Rico (+1787)" },
    { code: "+974", label: "Qatar (+974)" },
    { code: "+262", label: "Reunion (+262)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+7", label: "Russia (+7)" },
    { code: "+250", label: "Rwanda (+250)" },
    { code: "+378", label: "San Marino (+378)" },
    { code: "+239", label: "Sao Tome & Principe (+239)" },
    { code: "+966", label: "Saudi Arabia (+966)" },
    { code: "+221", label: "Senegal (+221)" },
    { code: "+381", label: "Serbia (+381)" },
    { code: "+248", label: "Seychelles (+248)" },
    { code: "+232", label: "Sierra Leone (+232)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+421", label: "Slovak Republic (+421)" },
    { code: "+386", label: "Slovenia (+386)" },
    { code: "+677", label: "Solomon Islands (+677)" },
    { code: "+252", label: "Somalia (+252)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+94", label: "Sri Lanka (+94)" },
    { code: "+290", label: "St. Helena (+290)" },
    { code: "+1869", label: "St. Kitts (+1869)" },
    { code: "+1758", label: "St. Lucia (+1758)" },
    { code: "+249", label: "Sudan (+249)" },
    { code: "+597", label: "Suriname (+597)" },
    { code: "+268", label: "Swaziland (+268)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+963", label: "Syria (+963)" },
    { code: "+886", label: "Taiwan (+886)" },
    { code: "+7", label: "Tajikstan (+7)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+228", label: "Togo (+228)" },
    { code: "+676", label: "Tonga (+676)" },
    { code: "+1868", label: "Trinidad & Tobago (+1868)" },
    { code: "+216", label: "Tunisia (+216)" },
    { code: "+90", label: "Turkey (+90)" },
    { code: "+993", label: "Turkmenistan (+993)" },
    { code: "+1649", label: "Turks & Caicos Islands (+1649)" },
    { code: "+688", label: "Tuvalu (+688)" },
    { code: "+256", label: "Uganda (+256)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+380", label: "Ukraine (+380)" },
    // { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+598", label: "Uruguay (+598)" },
    // { code: "+1", label: "USA (+1)" },
    { code: "+7", label: "Uzbekistan (+7)" },
    { code: "+678", label: "Vanuatu (+678)" },
    { code: "+379", label: "Vatican City (+379)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+84", label: "Vietnam (+84)" },
    { code: "+1284", label: "Virgin Islands - British (+1284)" },
    { code: "+1340", label: "Virgin Islands - US (+1340)" },
    { code: "+681", label: "Wallis & Futuna (+681)" },
    { code: "+969", label: "Yemen (North)(+969)" },
    { code: "+967", label: "Yemen (South)(+967)" },
    { code: "+260", label: "Zambia (+260)" },
    { code: "+263", label: "Zimbabwe (+263)" },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };
  const styl = `
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
    .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
      margin: 0;
      color: white;
    }
      .slick-dots {
      position: absolute;
      bottom: -25px;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
  }
      .slick-prev, .slick-next {
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 40%;
      display: block;
      width: 20px;
      height: 20px;
      padding: 0;
      transform: translate(0, -50%);
      cursor: pointer;
      color: white;
      border: none;
      outline: none;
      background: white;
  }
      .slick-prev:before, .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;
      opacity: .75;
      color: #0971CE;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
      .slick-dots li button:before {
      font-family: 'slick';
      font-size: 15px;
      line-height: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      content: '•';
      text-align: center;
      opacity: .25;
      color: #011689;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
      .slick-dots li.slick-active button:before {
      opacity: .75;
      color: #0971CE;
  }
  `;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 2500,
    // initialSlide: 0,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };
  return (
    <>
      <style>{styl}</style>
      <div className="container-fluid m-0 p-0 ">
        <div className="container-fluid mt-5">
          <div className="row">
            <div
              className="col-12 dynamic-height d-flex align-items-center justify-content-center mt-3"
              style={{
                position: "relative",
                height: "700px",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent background color
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -1,
                }}
              ></div>
              <div className="row mt-5 mt-lg-3  rounded-5 p-1 terminalresponsive-container align-items-center">
                {/* First Column with Text */}
                <motion.div
                  className="col-12 col-lg-6  text-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    src={IATALogo}
                    alt="IATA Image"
                    className="img-fluid mt-3 mt-lg-0 IATALogoWidth"
                  />

                  <h1
                    className="text-white ms-3 mt-0 mt-md-0 mt-xxl-0 heroheading"
                    // style={{ fontSize: "60px", fontWeight: "700" }}
                  >
                    Launch Your <br />
                    <span style={{ color: "#F3BC44" }}>
                      Travel and Tourism Career
                    </span>
                  </h1>
                  <p className="text-white  ms-3 herotext">
                    Join our comprehensive Foundation in Travel and Tourism
                    Diploma to turn your passion for travel into a career.{" "}
                  </p>
                </motion.div>

                {/* Second Column with Form */}
                <motion.div
                  id="enquire-now"
                  className="col-12 col-lg-5 col-xl-4 ms-auto me-lg-3 mb-3 rounded-5 mt-3"
                  style={{ backgroundColor: "#011689", padding: "20px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h2 className="text-white mt-2 text-center Enquiretext">
                    Enquire Now
                  </h2>
                  <Form
                    form={form}
                    className="rounded-5"
                    layout="vertical"
                    onFinish={handleSubmit}
                    style={{ padding: "20px" }}
                  >
                    {/* Form Fields */}
                    <Form.Item
                      label="First Name"
                      name="fname"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>
                    <Form.Item
                      label="Last Name"
                      name="lname"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCode}
                          onChange={handleCountryChange}
                          // style={{ width: "30%" }}
                          style={{ width: selectWidth }}
                          dropdownStyle={{ width: dropdownWidth }}
                          // dropdownStyle={{ width: "50%" }}
                          optionLabelProp="code" // To display the full label when selected
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option
                              key={index}
                              value={country.code}
                              label={country.label}
                            >
                              {country.label}{" "}
                              {/* Display only country code in dropdown */}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          // maxLength={15}
                          onChange={handlePhoneNumberChange}
                          style={{ width: "70%" }}
                          placeholder="Enter your phone number"
                        />
                      </Space.Compact>
                    </Form.Item>
                    <Form.Item>
                      <div className="d-flex justify-content-center">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor: "#faad14",
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid  mt-5  ">
          <div className="row WhyChoose-container">
            <div className="col-12">
              <h1 className="text-center WingsWayHeading">
                <span style={{ color: "#0971CE" }}>
                  Why Choose WingsWay for
                </span>
                <br />
                <span> Foundation in Travel and Tourism Diploma Training?</span>
              </h1>
            </div>
          </div>
          {/* <div
            className={`row   d-flex align-items-center mt-1 p-lg-4 justify-content-center WhyChoose-container custom-background slide-in-left   ${
              hasViewedSlide.zeroElement ? "animate-slide-in" : ""
            }`}
            style={{
              borderRadius: "10px",
            }}
            ref={myRef0}
          >
            <div className="col-12 ">
              <h2 className="text-center mt-1  RecognitionsHeading">
                Recognitions and Qualifications
              </h2>
            </div>
            <div className="col-12 col-lg-4 mt-5 recognitionsBorder">
              <div className="text-center">
                {" "}
                <img src={IATA} alt="IATA Image" className="img-fluid w-25" />
              </div>

              <p className="mt-3 text-center">
                Our courses are recognised by the International Air Transport
                Association (IATA, Canada), ensuring industry relevance and
                international recognition.
              </p>
            </div>

            <div className="col-12 col-lg-4 mt-5  recognitionsBorder">
              <div className="text-center">
                <img src={KHDA} alt="KHDA Image" className="img-fluid w-25" />
              </div>
              <p className="mt-3 text-center">
                Our courses meet the high standards set by the Knowledge and
                Human Development Authority for private education.
              </p>
            </div>
            <div className="col-12 col-lg-4 mt-5">
              <div className="text-center">
                <img src={ISO} alt="ISO Image" className="img-fluid w-25" />
              </div>
              <p className="mt-3 text-center">
                We are committed to quality management and continuous
                improvement.
              </p>
            </div>
          </div> */}

          <div
            className={`row d-flex align-items-start mt-2 p-xxl-5 justify-content-center WhyChoose-container custom-background slide-in-left ${
              hasViewedSlide.zeroElement ? "animate-slide-in" : ""
            }`}
            style={{ borderRadius: "10px" }}
            ref={myRef0}
          >
            <div className="col-12">
              <h2 className="text-center mt-1 RecognitionsHeading">
                Recognitions and Qualifications
              </h2>
            </div>

            {/* IATA Logo Section */}
            <div className="col-12 col-lg-4 mt-3 recognitionsBorder d-flex flex-column justify-content-start align-items-center text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "120px" }}
              >
                <img
                  src={IATA}
                  alt="IATA Logo"
                  className="img-fluid"
                  style={{
                    width: "190px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="text-center mt-3">
                Our courses are recognised by the International Air Transport
                Association (IATA, Canada), ensuring industry relevance and
                international recognition.
              </p>
            </div>

            {/* KHDA Logo Section */}
            <div className="col-12 col-lg-4 mt-3 recognitionsBorder d-flex flex-column justify-content-start align-items-center text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "120px" }}
              >
                <img
                  src={KHDA}
                  alt="KHDA Logo"
                  className="img-fluid"
                  style={{
                    width: "160px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="text-center mt-3">
                Our courses meet the high standards set by the Knowledge and
                Human Development Authority for private education.
              </p>
            </div>

            {/* ISO Logo Section */}
            <div className="col-12 col-lg-4 mt-3 d-flex flex-column justify-content-start align-items-center text-center">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "120px" }}
              >
                <img
                  src={ISO}
                  alt="ISO Logo"
                  className="img-fluid"
                  style={{
                    width: "190px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <p className="text-center mt-3">
                We are certified by the International Accreditation Forum (IAF)
                for our commitment to quality management and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 " ref={counterSectionRef}>
          <div
            className={`row text-white p-3 Trusted-container  slide-in-left  ${
              hasViewedSlide.myElement ? "animate-enquire" : ""
            }`}
            ref={myRef1}
          >
            <div className="col-12 text-center text-black">
              <h2 className="text-center  RecognitionsHeading">
                Trusted By Students Worldwide
              </h2>
            </div>

            <div className="col-12 d-flex flex-column flex-lg-row justify-content-center mt-3 ">
              {/* Course 1 */}
              <div className="col-12 col-lg-4 border border-white p-0 p-lg-3 bg-white rounded-3  mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={3.5}
                            duration={3}
                            decimals={1}
                            suffix="M+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    <span className="fw-bold">
                      Vast Network of Professionals:{" "}
                    </span>
                    <span>
                      Join professionals associated with The International
                      Certification Organizations we represent.
                    </span>
                    <br />
                  </p>
                </div>
              </div>

              {/* Course 2 */}
              <div className="col-12 col-lg-4   mt-lg-0 border border-white p-0 p-lg-3 bg-white rounded-3 mb-3 mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={250}
                            duration={4}
                            // decimals={1}
                            suffix="+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    {" "}
                    <span className="fw-bold">
                      Extensive Course Offerings:{" "}
                    </span>
                    <span>
                      Explore over 250+ courses designed to enhance your skills
                      and career prospects.
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4  mt-lg-0  border border-white p-0 p-lg-3 bg-white rounded-3 mb-3 mb-lg-0">
                <div className="align-items-center text-center text-black rounded-3 p-2  bg-white">
                  <div>
                    <h1>
                      <span className="counter rounded-pill Counter ps-4 pe-3 ps-lg-4 p-2 pe-lg-4">
                        {isCounterVisible && (
                          <CountUp
                            start={0}
                            end={80}
                            duration={5}
                            // decimals={1}
                            suffix="+"
                          />
                        )}
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-center mt-4"
                    style={{ fontSize: "18px", fontWeight: "400" }}
                  >
                    {" "}
                    <span className="fw-bold">Diverse Student Base: </span>
                    <span>
                      Be a part of a growing community of students and
                      professionals from over 80+ nationalities.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid mt-3 mt-lg-4 border border-white"
          id="Coursediscription"
        >
          <div className="row border aboutdivwidth border-white m-auto">
            <div className="col-12 ">
              <div className="row d-flex align-items-center justify-content-center">
                <motion.div
                  ref={ref}
                  className="col-12 col-lg-6 "
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: hasViewed ? 1 : 0,
                    x: hasViewed ? 0 : -50,
                  }}
                  transition={{ duration: 1 }}
                >
                  {/* Course Description */}
                  <div className="course-text ">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hasViewed ? 1 : 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="course-title  "
                    >
                      <h1
                        className="text-start Courseheading"
                        style={{ color: "#0971CE" }}
                      >
                        Course Description
                      </h1>
                      <p className="mt-2 ms-1">
                        This IATA-certified Travel and Tourism diploma is
                        curated for anybody interested to work in the exciting
                        industry of travel and tourism. It covers 13 essential
                        modules that will make you an expert in arranging travel
                        plans end-to-end, including transport essentials, the
                        role of geography in travel planning, booking tools,
                        airfare details, and the influence of technology on the
                        industry.
                      </p>

                      <p className="mt-2 ms-1">
                        Our offerings extend beyond education, encompassing
                        guaranteed internships at international airports in the
                        UAE, grooming sessions, CV-building support, mock
                        interviews, and more.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className={`col-12 col-lg-6 m-auto border border-white  text-center`}
                  ref={myRef2}
                  initial={{ scale: 0 }}
                  animate={{ scale: hasViewedSlide.myElement ? 1 : 0 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {/* <img
                    src={IATA}
                    alt="IATA Image"
                    className="img-fluid rounded-3 mt-lg-0 hover-scale text-center"
                    // style={{ width: "209px" }}
                    style={{ width: "45%" }}
                  /> */}

                  <img
                    src={CourseDescription}
                    alt="Course Description Image"
                    className="img-fluid mt-lg-0 text-center"
                    // style={{ width: "209px" }}
                    style={{ borderRadius: "3px 30px 3px 30px" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid  mt-5 border border-white " id="key">
          <div
            className={`row aboutdivwidth slide-in-left  ${
              hasViewedSlide.thirdElement ? "animate-slide-in" : ""
            }`}
            ref={myRef3}
          >
            {" "}
            <div className="col-12 ">
              <h1 className="text-center Keyheading">
                <span>Key </span>
                <span style={{ color: "#0971CE" }}>Topics</span>
              </h1>
            </div>
            <div className="col-12  d-flex align-items-center justify-content-center justify-content-between flex-wrap mt-3">
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow hover-scale2 mt-2 mt-lg-0 p-3  p-lg-3  p-md-2 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={travel}
                  alt="Travel Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    What it takes to excel in the travel industry
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow  hover-scale2 mt-5 mt-md-3 mt-lg-0   p-md-2 p-3   p-lg-3 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={globe}
                  alt="Globe Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Understanding physical geography, maps, and industry codes
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow hover-scale2 mt-5 mt-md-3 mt-lg-0  p-md-2 p-3  p-lg-3 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={traveldocument}
                  alt="Travel Documents Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Essential travel documents and airport procedures
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`row aboutdivwidth mt-4 mt-lg-3 slide-in-left  ${
              hasViewedSlide.fourthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef4}
          >
            {" "}
            <div className="col-12  d-flex align-items-center justify-content-center justify-content-between flex-wrap mt-3">
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow hover-scale2 mt-2 mt-lg-0 p-3  p-lg-3  p-md-2 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={exploretravel}
                  alt="Explore mediums of travel Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Exploring mediums of travel and tourism: flights, trains,
                    hotels, car rentals, cruises, and tours
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow  hover-scale2 mt-5 mt-md-3 mt-lg-0   p-md-2 p-3   p-lg-3 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={customerservice}
                  alt="Customer Service Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Delivering exceptional customer service and building loyalty
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-3 col-xxl-4 card border border-light shadow hover-scale2 mt-5 mt-md-3 mt-lg-0  p-md-2 p-3  p-lg-3 KeyTopicsWidth"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              >
                <img
                  src={ticket}
                  alt="Ticket Image"
                  className="img-fluid w-50 m-auto mt-2"
                />
                <div>
                  <p className="fw-bold text-center mt-2">
                    Unpacking airfares, ticketing, and mastering GDS
                    functionality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 bg-light" id="About">
          <div className="row ">
            <div className="col-12 mt-5">
              <h1 className="text-center Aboutheading">About the Course</h1>{" "}
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light border border-light">
          <div
            className={`row d-flex align-items-center justify-content-center mt-3 mt-lg-3 aboutdivwidth slide-in-left ${
              hasViewedSlide.fifthElement ? "animate-enquire" : ""
            }`}
            ref={myRef5}
          >
            {/* Content Section */}
            <div className="col-12 col-lg-6 order-2 order-lg-2">
              <h2
                className="text-start ms-lg-4 mt-3 Aboutsubheading"
                style={{ color: "#011689" }}
              >
                Course Content
              </h2>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-4 d-flex align-items-start mt-2">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 1:</span>{" "}
                    <span className="d-block d-sm-inline">
                      The Travel and Tourism industry and the profession of
                      travel
                    </span>
                  </div>{" "}
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 2:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Geography in travel planning
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 3:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Travel formalities
                    </span>
                  </div>{" "}
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 4:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Air transport essentials
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 5:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Land transport: Introduction to passenger rail
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 6:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Land transport: Car & camper
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 7:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Hotel products and services
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 8:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Water transport: Ferries & cruise
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 9:</span>{" "}
                    <span className="d-block d-sm-inline">Tour packages</span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 10:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Serving the travel customer
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 11:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Electronic booking tools (Sabre){" "}
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 12:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Fundamental in air fares & ticketing{" "}
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>Module 13:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Technology in travel: Distribution and airline retailing
                      with NDC
                    </span>
                  </div>
                </li>
              </ul>

              {/* Button for Large Devices */}
              <div className="mt-3 d-none d-lg-block ms-2">
                <button
                  className="btn btn-lg EnquireButton Enquirebuttonwidth ms-lg-4 mt-1"
                  onClick={(e) => handleEnquireClick(e, "enquire-now")}
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-12 col-lg-6 mt-3 order-1 order-lg-1">
              <img
                src={CourseContent}
                alt="Course Content Image"
                className="img-fluid course-content-image-height"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              />
            </div>

            {/* Button Section for Small and Medium Devices */}
            <div className="col-12 mt-2 ms-3 order-3 d-block d-lg-none">
              <button
                className="btn btn-lg EnquireButton Enquirebuttonwidth ms-lg-4"
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light border border-light">
          <div
            className={`row bg-light d-flex align-items-center justify-content-center mt-5 aboutdivwidth slide-in-left ${
              hasViewedSlide.sixthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef6}
          >
            {/* Content Section */}
            <div className="col-12 col-lg-6 order-2 order-lg-1 mt-2  ">
              <h1
                className="text-start Aboutsubheading"
                style={{ color: "#011689" }}
              >
                Learner’s Profile
              </h1>

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Travel Agents
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Airline Reservation Agents
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Tour Operators
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Call Center Agents
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Working professionals interested in the industry
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  People looking to change their career
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  High school graduates
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Travel enthusiasts
                </li>
              </ul>
              <div className="col-12 col-lg-6 d-flex justify-content-start mt-3 order-3 order-lg-2 d-none d-lg-block ms-2">
                <button
                  className="btn btn-lg EnquireButton Demoenquirebuttonwidth  mt-1"
                  onClick={(e) => handleEnquireClick(e, "enquire-now")}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-12 col-lg-6 mt-2 mt-lg-3  order-1 order-lg-3 ">
              <img
                src={LearnerProfile}
                alt="Learner's Profile Image"
                className="img-fluid ms-lg-3"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              />
            </div>
            <div className="col-12 mt-2 order-3 d-block d-lg-none ms-3">
              <button
                className="btn btn-lg EnquireButton Demoenquirebuttonwidth  ms-lg-4"
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light border border-light  ">
          <div
            className={`row  bg-light d-flex align-items-center justify-content-center mt-5 aboutdivwidth slide-in-left  ${
              hasViewedSlide.seventhElement ? "animate-enquire" : ""
            }`}
            ref={myRef7}
          >
            <div className="col-12 col-lg-6 order-2 order-lg-2">
              <h2
                className="text-start ms-lg-4 mt-3 Aboutsubheading"
                style={{ color: "#011689" }}
              >
                Entry Qualifications
              </h2>
              {/* <p
                className="ms-lg-4 mt-2 "
                // style={{ fontSize: "17px", fontWeight: "700" }}
              >
                The eligibility criteria for the Foundation of Travel and Tourism course at WingsWay Training Institute is:
              </p> */}
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  High school diploma or equivalent (10+2 education)
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Proficiency in English
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Minimum age of 18 years
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  A keen interest in the travel and tourism industry is highly
                  recommended
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Familiarity with basic computer operations and internet usage{" "}
                </li>
              </ul>

              {/* Button for Large Devices */}
              <div className="mt-3 d-none d-lg-block ms-2">
                <button
                  className="btn btn-lg EnquireButton Enquirebuttonwidth  ms-lg-4 mt-1"
                  onClick={(e) => handleEnquireClick(e, "enquire-now")}
                >
                  Enquire Now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-12 col-lg-6 mt-3 mt-lg-4 order-1 order-lg-1">
              <img
                src={EntryQualification}
                alt="Entry Qualification Image"
                className="img-fluid"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              />
            </div>

            {/* Button Section for Small and Medium Devices */}
            <div className="col-12 mt-2 order-3 d-block d-lg-none ms-3">
              <button
                className="btn btn-lg EnquireButton Enquirebuttonwidth ms-lg-4"
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-light border border-light pb-5">
          <div
            className={`row bg-light d-flex align-items-center justify-content-center mt-5 aboutdivwidth slide-in-left   ${
              hasViewedSlide.eigthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef8}
          >
            <div className="col-12 col-lg-6 order-2 order-lg-1 mt-2 ">
              <h1
                className="text-start Aboutsubheading"
                style={{ color: "#011689" }}
              >
                Career Opportunities{" "}
              </h1>

              {/* <p
                className="ms-lg-4 mt-2 "
                // style={{ fontSize: "17px", fontWeight: "700" }}
              >
             Numerous career opportunities await in Airlines, Aviation, Hospitality, Travel departments of large companies, government bodies, and travel agencies. Here are a few examples of potential Travel and Tourism job opportunities:
              </p> */}

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Reservation Agent
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Travel Consultant
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Destination Specialist
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Corporate Travel Consultant
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Travel Coordinator
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Ticketing Agent
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Cruise Consultant
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Hotel Manager
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Tour Operator
                </li>
                <li className="d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="me-2 flex-shrink-0 mt-1 ms-1"
                    style={{ color: "#011689" }}
                  />
                  Travel Agency Manager
                </li>
              </ul>
              <div className="col-12 col-lg-6 d-flex justify-content-start mt-3 order-3 order-lg-2 d-none d-lg-block ms-2">
                <button
                  className="btn btn-lg EnquireButton Demoenquirebuttonwidth mt-1"
                  onClick={(e) => handleEnquireClick(e, "enquire-now")}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            {/* Image Section */}
            <div className="col-12 col-lg-6 mt-2 mt-lg-3  order-1 order-lg-3">
              <img
                src={CareerOpportunities}
                alt="Career Opportunities Image"
                className="img-fluid ms-lg-3"
                style={{ borderRadius: "3px 30px 3px 30px" }}
              />
            </div>
            <div className="col-12 mt-2 order-3 d-block d-lg-none ms-3">
              <button
                className="btn btn-lg EnquireButton Demoenquirebuttonwidth ms-lg-4"
                onClick={(e) => handleEnquireClick(e, "enquire-now")}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid contactbannerbackImage p-5">
          <div
            className={`row slide-in-left d-flex  align-items-center Stillsection  ${
              hasViewedSlide.ninethElement ? "animate-enquire" : ""
            }`}
            ref={myRef9}
            // style={{ width: "80%", margin: "0 auto" }}
          >
            {/* Icon Section */}
            <div className="col-12 col-sm-4 col-md-2 col-lg-1 text-center mb-3 mb-md-0">
              <img src={contactsvg} alt="contact svg" />
            </div>

            {/* Text Section */}
            <div className="col-12 col-sm-8 col-md-6 col-lg-8 ps-lg-3 ps-xl-0 ps-xxl-0 text-center text-md-start text-lg-start mb-3 mb-md-0 mt-lg-3">
              <p className="conactbannertext">
                Still have questions about our courses? Get in touch today.
              </p>
            </div>

            {/* Button Section */}
            <div className="col-12 col-sm-12 col-md-4 col-lg-3  text-center text-md-end text-lg-center">
              <button
                className="btn btn-lg contactusbutton"
                onClick={() => {
                  window.location.href = "tel:+971 4 222 0885"; // Replace with your phone number
                }}
              >
                <span>Contact Us</span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={` container-fluid  mt-5   rounded-4 slide-in-left    ${
            hasViewedSlide.tenthElement ? "animate-enquire" : ""
          }`}
          ref={myRef10}
          id="Testimonials"
        >
          <div className="row  d-flex align-items-center justify-content-center  aboutdivwidth">
            <div className="col-12 text-center ">
              <h1
                className="Testimonialmainheading"
                style={{ color: "#011689" }}
              >
                Hear From our Happy Students
              </h1>
            </div>
          </div>

          <Slider
            {...settings}
            className="m-0 p-0 col-9 col-md-8 col-lg-9 m-auto aboutdivwidth "
          >
            <div>
              <div className="p-3 rounded-3 mt-0 h-auto ">
                <h3 className="text-center mt-3 Testimonialsubheading">
                  Sidonie la Fleur{" "}
                </h3>
                <p className=" mt-3 text-center Testimonialpara">
                  I had the best educational experience from here and I can
                  boast that I now Have WINGS to fly higher.🥰🥰🥰 I love y’all
                  Ma’am Sheetal, Miss Tina and all the School Admins.
                </p>
              </div>
            </div>

            <div>
              <div className=" p-3 rounded-3 ms-md-2 mt-0 h-auto">
                <h3 className="text-center mt-3 Testimonialsubheading">
                  Sushmita Bajracharya
                </h3>
                <p className="text-center mt-3 Testimonialpara">
                  It was an amazing experience, I’m grateful to be your student.
                  I want to thank entire team of WingsWay Training Institute for
                  the wonderful opportunities to learn and grow. Special thanks
                  to ma'am sheetal and ma'am Tina. Thank you.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3  rounded-3  mt-0  h-auto">
                <h3 className="text-center mt-3 Testimonialsubheading">Za</h3>
                <p className="text-center mt-3 Testimonialpara">
                  I had the privilege of learning from Ms. Sheetal, and it was
                  an incredible experience. Her teaching style is engaging,
                  clear, and interactive, making even the most complex topics
                  easy to understand. She is always approachable and genuinely
                  cares about students' success. Thanks to her dedication and
                  expertise. Thanks to Ms. Fathima who provided valuable
                  information about the Foundation in Travel and Tourism course
                  and supported my admission process. Thank you WingsWay Team.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3 rounded-3   mt-0 h-auto">
                <h3 className="text-center mt-3 Testimonialsubheading">
                  Trenah Trevia{" "}
                </h3>
                <p className="text-center mt-3 Testimonialpara">
                  I am glad to be among the students in WingsWay Training
                  Institute. The experience is overwhelming and have gained a
                  lot of knowledge and team work.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3  rounded-3  mt-0 h-auto">
                <h3 className="text-center mt-3 Testimonialsubheading">
                  Dilan Jason
                </h3>
                <p className="text-center mt-3 Testimonialpara">
                  {" "}
                  WingsWay has given me an opportunity into something I love
                  which I'm extremely grateful. Ms. Tina's classes are very easy
                  to understand and really enjoyable, I highly recommend
                  WingsWay to anyone who's looking for an upscale in their
                  professional life.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3  rounded-3  mt-0 h-auto">
                <h3 className="text-center mt-3 Testimonialsubheading">
                  Sadia Nasir
                </h3>
                <p className="text-center mt-3 Testimonialpara">
                  {" "}
                  I have completed Foundation in Travel and Tourism course from
                  WingsWay Training Institute. Trainers are very good and very
                  cooperative and helpful.
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="3x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid elevatebannerbackImage elevatewidth p-3 pb-4 mt-5 p-lg-5">
          <div
            className={`row slide-in-left d-flex justify-content-center align-items-center elevatewidth  p-lg-2 p-xl-5  ${
              hasViewedSlide.eleventhElement ? "animate-slide-in" : ""
            }`}
            ref={myRef11}
          >
            <div className="col-12">
              <h1 className="text-center text-white Getintouchheading">
                Get In Touch
              </h1>
            </div>
            <div className="col-12 text-center mt-3 ">
              <button
                className="btn btn-lg contactusbutton"
                onClick={() => {
                  window.location.href = "tel:+971 4 222 0885"; // Replace with your phone number
                }}
              >
                <span>Contact Us</span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
              <button
                className="btn btn-lg Footerdemobutton ms-md-3 ms-lg-3 mt-3 mt-md-0"
                onClick={handleModalOpen}
              >
                <span>Book A Free Demo Class</span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-center"
          style={{ backgroundColor: "black" }}
        >
          <div
            className="row d-flex justify-content-center align-items-center  "
            style={{ backgroundColor: "black" }}
          >
            <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center text-center ms-lg-5 ">
              <img
                src={Footerlogo}
                alt="logo"
                className="img-fluid mt-3 responsive-logofooter text-center"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-2 text-center mt-lg-2 text-lg-center ">
              <a
                href="#Coursediscription"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "Coursediscription")}
              >
                <span>Course Description</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 mt-3 mt-md-5 text-lg-center ">
              <a
                href="#About"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "About")}
              >
                <span>About the course</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 mt-3 mt-md-5 text-lg-center">
              <a
                href="#Testimonials"
                className="footer-link footerlinktext"
                onClick={(e) => handleFooterLinkClick(e, "Testimonials")}
              >
                <span>Testimonials</span>
              </a>
            </div>
            <div
              className="row "
              style={{ backgroundColor: "black", color: "white" }}
            >
              <div className="col-12 text-center mt-3 mt-md-5 mt-lg-0 mb-5">
                <p>© 2025 WingsWay All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
