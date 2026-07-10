"use client";

import { form } from "framer-motion/client";
import { X } from "lucide-react";
import { useState } from "react";

export default function CareerApplicationForm({ position, onClose }) {
    console.log(position)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",

        experience: "",
        skills: [],
        currentJobTitle: "",
        currentCompany: "",
        currentCTC: "",


        jobRole: position?.role || "",
        jobType: "",

        qualification: "",
        degree: "",
        college: "",
        certifications: "",

        preferredLocation: "",
        noticePeriod: "",
        expectedSalary: "",
    });
    console.log(formData.experience);
    const [skillInput, setSkillInput] = useState("");
    const [isSubmiting, setisSubmiting] = useState(false);
    const handleSkillKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const value = skillInput.trim();

            if (!value) return;

            // Prevent duplicates
            if (formData.skills.includes(value)) return;

            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, value],
            }));

            setSkillInput("");
        }
    };

    const removeSkill = (skill) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((item) => item !== skill),
        }));
    };

    const [resume, setResume] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisSubmiting(true);

        const data = new FormData();


        Object.keys(formData).forEach((key) => {
            if (key === "skills") {
                data.append("skills", JSON.stringify(formData.skills));
            } else {
                data.append(key, formData[key]);
            }
        });
        // Append all form fields
        // Object.keys(formData).forEach((key) => {
        //     data.append(key, formData[key]);
        // });

        // Append resume BEFORE sending request
        if (resume) {
            data.append("resume", resume);
        }

        try {
            const response = await fetch("/api/careers/apply", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (result.success) {

                alert("Application Submitted Successfully!");

                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    location: "",

                    experience: "",
                    skills: [],
                    currentJobTitle: "",
                    currentCompany: "",


                    jobRole: position?.role || "",
                    jobType: position?.type || "",

                    qualification: "",
                    degree: "",
                    college: "",
                    certifications: "",

                    preferredLocation: "",
                    noticePeriod: "",
                    expectedSalary: "",
                });

                setResume(null);
                onClose();
            } else {
                alert(result.message || "Something went wrong.");
            }

        } catch (error) {
            console.error(error);
            alert("Server Error");
        }
        finally {
            setisSubmiting(false);
        }
    };

    return (
        <section className="w-full">
            <div className="relative h-full bg-white rounded-2xl shadow-xl p-10 ">
                <X size={18} className="absolute top-2 right-2 cursor-pointer rounded-full text-white bg-red-600 w-6 h-6 hover:scale-125 transition-transform duration-300"
                    onClick={onClose} />
                <h1 className="text-4xl font-bold mb-2">
                    Job Application for  {position?.role}
                </h1>

                <p className="text-gray-500 mb-10">
                    Fill out the form below to apply for your desired position.
                </p>

                <form onSubmit={handleSubmit} className="space-y-12">

                    {/* Contact */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <Input
                                label="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                            />

                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Input
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <Input
                                label="Current Location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />

                        </div>
                    </div>

                    {/* Professional */}

                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Professional Profile
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <label className="font-medium mb-2 block">
                                    Resume / CV
                                </label>

                                <input
                                    required
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleResumeChange}
                                    className="w-full border rounded-lg p-3"
                                />
                            </div>

                            <Select
                                label="Total Experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                options={[
                                    "Fresher",
                                    "0-1 Years",
                                    "1-2 Years",
                                    "2-3 Years",
                                    "3-5 Years",
                                    "5+ Years",
                                ]}
                            />

                            <div>
                                <label className="block font-medium mb-2">
                                    Key Skills
                                </label>

                                <div className="border rounded-lg p-3 min-h-[55px] flex flex-wrap gap-2">

                                    {formData.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
                                        >
                                            {skill}

                                            <button
                                                type="button"
                                                onClick={() => removeSkill(skill)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </span>
                                    ))}

                                    <input
                                        type="text"
                                        value={skillInput}
                                        onChange={(e) => setSkillInput(e.target.value)}
                                        onKeyDown={handleSkillKeyDown}
                                        placeholder="Type a skill and press Enter"
                                        className="flex-1 min-w-[180px] outline-none"
                                    />
                                </div>
                            </div>
                            {formData.experience && formData.experience !== "Fresher" && (
                                <>
                                    <Input
                                        label="Current Job Title"
                                        name="currentJobTitle"
                                        value={formData.currentJobTitle}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        label="Current Job Company"
                                        name="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Current CTC"
                                        name="currentCTC"
                                        value={formData.currentCTC}
                                        onChange={handleChange}
                                    />

                                </>
                            )
                            }

                        </div>
                    </div>

                    {/* Education */}

                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Education Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <Select
                                label="Highest Qualification"
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                options={[
                                    "Diploma",
                                    "Bachelor's Degree",
                                    "Master's Degree",
                                    "PhD",
                                ]}
                            />

                            <Input
                                label="Degree / Specialization"
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                            />

                            <Input
                                label="College / University"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                            />

                            <Input
                                label="Certifications"
                                name="certifications"
                                value={formData.certifications}
                                onChange={handleChange}
                            />

                        </div>
                    </div>

                    {/* Job */}

                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Job Preferences
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <Input
                                label="Preferred Location"
                                name="preferredLocation"
                                value={formData.preferredLocation}
                                onChange={handleChange}
                            />

                            <Select
                                label="Notice Period"
                                name="noticePeriod"
                                value={formData.noticePeriod}
                                onChange={handleChange}
                                options={[
                                    "Immediate",
                                    "15 Days",
                                    "1 Month",
                                    "2 Months",
                                    "3 Months",
                                ]}
                            />
                            <Input
                                label="Job Role"
                                name="jobRole"
                                value={formData.jobRole}
                                onChange={handleChange}
                            />

                            <Select
                                label="Job Type"
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                options={[
                                    'FullTime',
                                    'Internship',
                                ]}
                            />

                            <div className="md:col-span-2">
                                <Input
                                    label="Expected Salary"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmiting}
                        className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold"

                    >
                        {isSubmiting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg
                                    className="w-5 h-5 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>

                                Submitting...
                            </span>
                        ) : (
                            "Submit Application"
                        )}
                    </button>

                </form>
            </div>
        </section>
    );
}

function Input({
    label,
    name,
    value,
    onChange,
    type = "text",
}) {
    return (
        <div>
            <label className="block font-medium mb-2">
                {label}
            </label>

            <input
                required
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>
    );
}

function Select({
    label,
    name,
    value,
    onChange,
    options,
}) {
    return (
        <div>
            <label className="block font-medium mb-2">
                {label}
            </label>

            <select
                required
                name={name}
                value={value}
                onChange={onChange}
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
                <option value="">Select</option>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}