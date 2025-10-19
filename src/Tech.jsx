import React from "react";

export default function Technologies() {
  const technologies = [
    {
      category: "Backend",
      tech: [
        { name: "PHP", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO6dYQFqGX2TEJxyB-6mIfkoK0LdGLVy6ew&s" },
        { name: ".Net", image: "https://stackworx.github.io/dotnet-workshop/img/dotnetcore.png" },
        { name: "Java", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S9FqOWEjqGZPQ98L55jzxu9OXbJqwXx_Gw&s" },
        { name: "Python", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZqZkpMyiN2uSuT7GAf6JSkJ44YsZqoQHdw&s" }
      ]
    },
    {
      category: "Front-end", 
      tech: [
        { name: "React", image: "https://miro.medium.com/0*6KymJYASmDeLkzRc" },
        { name: "Angular", image: "https://repository-images.githubusercontent.com/314186076/79a18fff-1aeb-4a12-9340-db81b383b5e7" },
        { name: "Vue.js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwSdXKlV59MMakovn5FMr02-xSB5pg-mbkQ&s" },
        { name: "TypeScript", image: "https://miro.medium.com/v2/resize:fit:1400/0*JVVKm0w8iaFX0kgT.png" }
      ]
    },
    {
      category: "DevOps & Cloud",
      tech: [
        { name: "Azure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxwQ-HcqYWYmiAhAfrCni-OWbht4XRpIrHQ&s" },
        { name: "Google Cloud", image: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png" },
        { name: "AWS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXOtdu5pD5vCifJFpBs5lH51fSKbQNr_vPA&s" },
        { name: "Docker", image: "https://bunnyacademy.b-cdn.net/what-is-docker.png" }
      ]
    },
    {
      category: "AI & ML",
      tech: [
        { name: "TensorFlow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png" },
        { name: "PyTorch", image: "https://pytorch.org/wp-content/uploads/2025/01/pytorch_seo.png" },
        { name: "OpenAI", image: "https://www.logicgate.com/wp-content/smush-webp/plt-openai-01-hero-01.png.webp" },
        { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" }
      ]
    },
    {
      category: "QA",
      tech: [
        { name: "Jenkins", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3s3eJpfGaV9Jk9m-fRxxF4HMnGkIxud04vg&s" },
        { name: "Jira", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/1200px-Jira_Logo.svg.png"},
        { name: "Selenium", image: "/abc.png" },
        { name: "Postman", image: "https://yt3.googleusercontent.com/XRzDTgEa9GybH_Uk21E9ri6_iYh-9gbyZzhiEBCnLjISgjTorjMiu7IwpChUMf2lLpEdX6ufDA=s900-c-k-c0x00ffffff-no-rj" }
      ]
    },
    {
      category: "UI/UX",
      tech: [
        { name: "Figma", image: "https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o=w240-h480-rw" },
        { name: "Sketch", image: "sketch.png" },
        { name: "Adobe XD", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" },
        { name: "InVision", image: "invision.png" }
      ]
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            TECHNOLOGIES
          </h1>
        </div>

      
        <div 
          className="relative bg-grey-900 shadow-6xl overflow-hidden border  mx-auto"
          style={{
            clipPath: "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)",
            transform: "skew(-3deg)",
          }}
        >
         
          <div 
            className="p-10 lg:p-14"
            style={{ transform: "skew(3deg)" }}
          >
            {/* Table Content */}
            <div className="divide-y divide-gray-200">
              {technologies.map((row, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-8 py-8 lg:py-10 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-blue-50 transition-colors duration-200`}
                >
              
                  <div className="lg:col-span-1 flex items-center pl-4 lg:pl-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-blue-900">
                      {row.category}
                    </h3>
                  </div>
                  
                
                  <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pr-4 lg:pr-6">
                    {row.tech.map((technology, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                      >
                        {/* Technology Image */}
                        <div className="w-14 h-14 lg:w-48 lg:h-48 flex items-center justify-center">
                          <img 
                            src={technology.image} 
                            alt={technology.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}