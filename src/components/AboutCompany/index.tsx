import React from 'react';
import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";

const AboutCompany = () => {
    return (
        <Container>
            <Title>О КОМПАНИИ</Title>
            <div className={"w-full flex justify-end"}>
                <div className={"mt-[52px] about-company-box flex justify-end items-center pt-[57px] pr-[40px] pb-[7px]"}>
                    <div className={"w-[702px] h-[454px] flex flex-col gap-4"}>
                        <p className={"text-[20px]"}>
                            Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
                        </p>
                        <Button className={"btn-sm h-[40px]"}>Узнать больше</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutCompany;