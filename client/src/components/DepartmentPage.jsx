import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentPage = () => {
  const { branch } = useParams();
  const normalizedBranch = branch?.toLowerCase();

  const departmentData = {
    electrical: {
      description:
        "Focuses on power systems, control engineering, and renewable energy.",
      faculty: [
        "Dr. Rintu Khanna (HoD)",
        "Dr. Jaimala Gambhir",
        "Dr. Sulata Bhandari",
        "Dr. Ajay Kumar",
        "Dr. Loveleen Taneja",
      ],
      courses: ["Power Systems", "Control Engineering", "Electrical Machines"],
      objectives: [
        "Equip students with fundamentals of electrical systems.",
        "Encourage research in renewable energy.",
        "Develop industry-relevant problem-solving skills.",
      ],
      outcomes: [
        "Design and analyze electrical systems.",
        "Contribute to renewable energy research.",
        "Manage industrial projects effectively.",
      ],
      laboratories: [
        "Power Systems Lab",
        "Control Engineering Lab",
        "Electrical Machines Lab",
      ],
    },
    computerscience: {
      description: "Leads research in AI, ML, and software development.",
      faculty: ["Dr. P. Singh (HoD)", "Prof. A. Verma", "Dr. T. Das"],
      courses: ["Data Structures", "Algorithms", "AI", "Machine Learning"],
      objectives: [
        "Develop strong problem-solving and programming skills.",
        "Provide knowledge of cutting-edge technologies.",
        "Encourage technological innovation.",
      ],
      outcomes: [
        "Excel in software development roles.",
        "Pursue research in AI and ML.",
        "Contribute to industry advancements.",
      ],
      laboratories: ["AI Lab", "Software Lab", "Networking Lab"],
    },
    metallurgy: {
      description:
        "Focuses on materials science, metallurgy, and manufacturing.",
      faculty: [
        "Dr. M. Bansal (HoD)",
        "Prof. R. Sharma",
        "Dr. P. Jain",
        "Prof. K. Mehta",
      ],
      courses: [
        "Materials Science",
        "Physical Metallurgy",
        "Manufacturing Processes",
      ],
      objectives: [
        "Understand the properties of metals and alloys.",
        "Develop materials for industrial applications.",
        "Promote research in materials science and engineering.",
      ],
      outcomes: [
        "Design materials for industrial uses.",
        "Contribute to material selection in manufacturing.",
        "Conduct experiments and analyze material properties.",
      ],
      laboratories: [
        "Materials Science Lab",
        "Metallography Lab",
        "Foundry Lab",
      ],
    },
    electronics: {
      description:
        "Focuses on electronics, microprocessors, and communication systems.",
      faculty: [
        "Dr. R. Kumar (HoD)",
        "Prof. P. Sharma",
        "Dr. A. Soni",
        "Prof. M. Verma",
      ],
      courses: ["Circuit Analysis", "Microprocessors", "Signal Processing"],
      objectives: [
        "Understand electronic circuits and systems.",
        "Design microprocessor-based systems.",
        "Promote research in communication systems.",
      ],
      outcomes: [
        "Design and analyze electronic circuits.",
        "Develop systems using microcontrollers and microprocessors.",
        "Understand and apply signal processing techniques.",
      ],
      laboratories: [
        "Electronics Lab",
        "Microprocessor Lab",
        "Communication Lab",
      ],
    },
    aerospace: {
      description:
        "Focused on aerodynamics, propulsion systems, and flight mechanics.",
      faculty: [
        "Dr. S. Reddy (HoD)",
        "Prof. J. Gupta",
        "Dr. K. Sharma",
        "Prof. N. Rao",
      ],
      courses: [
        "Aerodynamics",
        "Flight Mechanics",
        "Propulsion Systems",
        "Aircraft Design",
      ],
      objectives: [
        "Provide knowledge in aerodynamics and flight dynamics.",
        "Develop skills for aircraft and spacecraft design.",
        "Encourage research in aerospace technologies.",
      ],
      outcomes: [
        "Design and analyze aircraft and spacecraft systems.",
        "Conduct experiments in aerodynamics and propulsion.",
        "Contribute to space exploration and aviation industries.",
      ],
      laboratories: [
        "Aerodynamics Lab",
        "Propulsion Lab",
        "Flight Simulation Lab",
      ],
    },
    production: {
      description:
        "Focuses on manufacturing processes, operations management, and systems optimization.",
      faculty: [
        "Dr. L. Patel (HoD)",
        "Prof. D. Sethi",
        "Dr. R. Mishra",
        "Prof. S. Agarwal",
      ],
      courses: [
        "Manufacturing Processes",
        "Operations Management",
        "Production Planning",
        "Automation Systems",
      ],
      objectives: [
        "Provide knowledge of industrial production systems.",
        "Develop skills in process optimization and manufacturing.",
        "Encourage research in production technologies and systems.",
      ],
      outcomes: [
        "Optimize manufacturing processes.",
        "Manage production systems efficiently.",
        "Design and implement automation solutions.",
      ],
      laboratories: ["Manufacturing Lab", "Automation Lab", "Operations Lab"],
    },
    civil: {
      description:
        "Focused on construction, structural engineering, and urban planning.",
      faculty: [
        "Dr. A. Shah (HoD)",
        "Prof. K. Bhatt",
        "Dr. R. Kumar",
        "Prof. S. Desai",
      ],
      courses: [
        "Structural Analysis",
        "Construction Materials",
        "Environmental Engineering",
        "Urban Planning",
      ],
      objectives: [
        "Provide knowledge in structural and civil engineering.",
        "Develop expertise in construction and infrastructure planning.",
        "Encourage research in sustainable urban development.",
      ],
      outcomes: [
        "Design and analyze structures.",
        "Contribute to sustainable infrastructure development.",
        "Work on urban planning and environmental solutions.",
      ],
      laboratories: ["Surveying Lab", "Concrete Lab", "Soil Mechanics Lab"],
    },
    mechanical: {
      description:
        "Focuses on mechanics, thermodynamics, and material science in mechanical systems.",
      faculty: [
        "Dr. A. Rathi (HoD)",
        "Prof. R. Verma",
        "Dr. S. Mehta",
        "Prof. K. Saxena",
      ],
      courses: [
        "Fluid Mechanics",
        "Thermodynamics",
        "Mechanical Vibrations",
        "Manufacturing Processes",
      ],
      objectives: [
        "Understand mechanical system design and analysis.",
        "Develop skills in fluid mechanics and thermodynamics.",
        "Encourage research in mechanical systems and robotics.",
      ],
      outcomes: [
        "Design mechanical systems.",
        "Analyze thermodynamics and fluid dynamics in systems.",
        "Work on robotics and automation projects.",
      ],
      laboratories: [
        "Fluid Mechanics Lab",
        "Thermodynamics Lab",
        "Robotics Lab",
      ],
    },
    chemical: {
      description:
        "Focuses on chemical processes, reactor design, and industrial chemistry.",
      faculty: [
        "Dr. R. Kapoor (HoD)",
        "Prof. S. Verma",
        "Dr. M. Singh",
        "Prof. R. Soni",
      ],
      courses: [
        "Chemical Reaction Engineering",
        "Process Control",
        "Industrial Chemistry",
        "Biochemical Engineering",
      ],
      objectives: [
        "Provide knowledge of chemical processes and reactors.",
        "Develop skills in process design and industrial operations.",
        "Promote research in sustainable and green chemistry.",
      ],
      outcomes: [
        "Design chemical processes and reactors.",
        "Contribute to sustainable industrial practices.",
        "Work on biochemical and environmental engineering projects.",
      ],
      laboratories: [
        "Chemical Engineering Lab",
        "Process Control Lab",
        "Biochemical Engineering Lab",
      ],
    },
    electronicscommunication: {
      description:
        "The Department focuses on the study of electronics, communication systems, embedded systems, and signal processing. It prepares students for roles in telecommunications, network management, and electronics industry.",
      faculty: [
        "Dr. R. Kumar (HoD)",
        "Prof. A. Sharma",
        "Dr. P. Bhatia",
        "Prof. S. Soni",
      ],
      courses: [
        "Analog Electronics",
        "Digital Communication",
        "Embedded Systems",
        "Signal Processing",
        "Microcontrollers",
      ],
      objectives: [
        "Provide an in-depth understanding of communication systems and electronics.",
        "Equip students with the skills to design and troubleshoot modern communication devices.",
        "Promote research in areas such as embedded systems and wireless communication.",
      ],
      outcomes: [
        "Design and analyze communication systems.",
        "Develop embedded systems for real-world applications.",
        "Contribute to the telecommunications and electronics industries.",
      ],
      laboratories: [
        "Communication Systems Lab",
        "Embedded Systems Lab",
        "Microcontroller Lab",
        "Signal Processing Lab",
      ],
    },
  };

  const data = departmentData[normalizedBranch] || {};
  const navigate = useNavigate();

  return (
    <div className="text-gray-800 text-xl w-[100%] bg-slate-300">
      {/* Header Section */}

      <header className="bg-slate-500 text-white p-8 text-center">
        <button
          className="bg-purple-700 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg"
          onClick={() => navigate('/home/head')}
        >
          Login
        </button>
      </header>
      <header className="department-header m-4">
        <h1 className="bg-slate-300 text-3xl text-center text-black font-bold">
          {branch.charAt(0).toUpperCase() + branch.slice(1).replace(/([A-Z])/g, " $1").trim()} Engineering
        </h1>
      </header>

      {/* Department Info Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          About the Department
        </h2>
        <p>{data.description || "Information not available."}</p>
      </section>

      {/* Faculty Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          Faculty
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.faculty?.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </section>

      {/* Courses Offered Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          Courses Offered
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.courses?.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Objectives Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          Objectives
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.objectives?.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </section>

      {/* Outcomes Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          Outcomes
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.outcomes?.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      {/* Laboratories Section */}
      <section className="my-8 mx-auto p-6 max-w-4xl border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-purple-600 border-b-2 border-purple-600 pb-2 mb-4">
          Laboratories
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {data.laboratories?.map((lab, index) => (
            <li key={index}>{lab}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DepartmentPage;
