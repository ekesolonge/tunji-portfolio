import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <h1 className="mb-12 max-w-[53.75rem] text-[2.5rem] font-bold leading-[3.375rem] text-[#121212] md:mb-6 md:text-[5rem] md:leading-[6.75rem]">
        Designing with purpose, creating with impact
      </h1>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <Image
          src="/images/profile.png"
          alt="Olatunji Tajudeen"
          width={588}
          height={686}
          className="aspect-[345/413] max-w-full object-cover md:aspect-[588/686] md:min-w-[50%]"
        />
        <p className="text-[#4D5153] md:max-w-[30.1875rem] md:text-xl md:leading-[1.875rem] md:tracking-wide">
          My journey began in the legal field, driven by a deep curiosity about the world around me—how things work and why they
          are the way they are. When I transitioned into design, this curiosity paved a unique way for me to explore and solve
          problems.
          <br className="mt-4 block content-[''] md:mt-5" />
          As a product designer, my legal background has taught me the importance of thorough research, critical thinking, and
          attention to detail—all of which have become integral to my design process.
          <br className="mt-4 block content-[''] md:mt-5" />
          With experience in Webflow development, I have built a number of side projects while actively expanding my skillset by
          learning Front-End development. My goal is to merge my design expertise with technical skills to bring ideas to life in
          a more holistic way.
          <br className="mt-4 block content-[''] md:mt-5" />
          When I am not designing, I enjoy reading thriller novels and playing racing video games.
        </p>
      </div>
    </div>
  );
};

export default Profile;
