import { Box, Container, CssBaseline, Stack, Typography } from "@mui/material";
import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
const url = "https://bhavnacorp.com/images/corporateBanner.jpg";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import cp from "../assets/cp.jpg";
import { useEffect } from "react";
import Contact from "../components/Contact";
import KeyStrengths from "../components/KeyStrengths";

const list = [
  {
    title: "Customized and Targeted Talent Acquisition",
    description:
      "Tailoring our approach to your specific needs, we identify and attract top-tier professionals who align with your company culture and drive your organizational success.",
  },
  {
    title: "Extensive Industry Expertise",
    description:
      "With deep knowledge across diverse industries, we leverage our insights to source candidates with the specialized skills and experience required for your unique business requirements.",
  },
  {
    title: "Streamlined Recruitment Process",
    description:
      "Our efficient and well-defined recruitment process, combined with advanced screening techniques, saves you time and effort while ensuring only the most qualified candidates are presented to you.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We are committed to building long-term relationships with our clients, providing them with the best talent to drive their business forward.",
  },

  {
    title: "Confidentiality and Professionalism",
    description:
      "We prioritize maintaining the highest levels of confidentiality, treating all interactions with utmost professionalism, and safeguarding your sensitive information throughout the recruitment process.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <Container
        maxWidth={"xl"}
        width={"100%"}
        disableGutters
        height={"auto"}
        sx={{
          bgcolor: "#fff",
          overflow: "hidden",
        }}
      >
        <CssBaseline />
        <Stack
          direction={"row"}
          padding={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction={"column"} width={"60%"} padding={8} gap={3}>
            <Typography variant="h4" color={"#012970"} textAlign={"start"}>
              About Viriya
            </Typography>
            <Typography textAlign={"justify"} fontSize={"1.2rem"}>
              At Viriya Enterprises, we go beyond simply filling vacancies; we
              strive to build long-term partnerships with our clients. We take
              the time to comprehend your organization's culture, values, and
              objectives, enabling us to find candidates who not only possess
              the requisite qualifications but also align seamlessly with your
              company ethos.
            </Typography>

            <Typography textAlign={"justify"} fontSize={"1.2rem"}>
              Our dedicated team of experienced professionals works tirelessly
              to understand the unique requirements of each client, allowing us
              to tailor our solutions accordingly. We firmly believe that the
              right talent is the cornerstone of organizational success. By
              leveraging our extensive network, innovative techniques, and
              in-depth market knowledge, we help our clients identify and
              attract exceptional individuals who possess the skills and passion
              to drive their businesses forward.
            </Typography>
          </Stack>
          <img src={s2} width={"600px"} />
        </Stack>

        <Stack
          direction={"column"}
          padding={5}
          gap={3}
          width={"100vw"}
          sx={{
            bgcolor: "#eff7fe",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={"row"}
            gap={7}
            padding={4}
            justifyContent={"space-between"}
          >
            <img
              width="800px"
              src={s1}
              height="500px"
              style={{
                position: "relative",
                bottom: "-90px",
              }}
            />
            <Stack direction={"column"} gap={2}>
              <Typography fontSize={"2rem"} color={"#012970"} fontWeight={500}>
                Why you should Work with us
              </Typography>
              <Typography fontSize={"1.2rem"}>
                We efficiently connect exceptional talent with leading
                organizations, delivering superior recruitment services that
                ensure high-quality placements.
              </Typography>

              <ul className="list" style={{}}>
                {list.map((item) => (
                  <li
                    className="list-li"
                    style={{
                      padding: "5px",
                    }}
                  >
                    <Typography
                      fontSize={"1.2rem"}
                      fontWeight={500}
                      textAlign={"justify"}
                    >
                      {" "}
                      {item.title}:{" "}
                    </Typography>
                    <Typography
                      fontSize={"1.1rem"}
                      color={""}
                      textAlign={"justify"}
                    >
                      {item.description}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <KeyStrengths />

      <Box width={"100%"} bgcolor={"#f6f9ff"} padding={5}>
        <Stack direction={"column"} gap={1}>
          <Typography
            fontFamily={"Nunito Sans"}
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"#012970"}
          >
            Get in touch
          </Typography>

          <Typography textAlign={"center"}>
            Want to know how we can help you find your potential employees?
            Let's discuss!
          </Typography>
          <button className="my-button1">Contact</button>
        </Stack>
      </Box>
    </>
  );
};

export default AboutUs;
