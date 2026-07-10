import transporter from "@/lib/mailer";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const fullName = formData.get("fullName");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const location = formData.get("location");

        const experience = formData.get("experience");
        const skills = JSON.parse(formData.get("skills") || "[]");
        const currentJobTitle = formData.get("currentJobTitle");
        const currentCompany = formData.get("currentCompany");
        const currentCTC = formData.get("currentCTC");

        const qualification = formData.get("qualification");
        const degree = formData.get("degree");
        const college = formData.get("college");
        const certifications = formData.get("certifications");

        const preferredLocation = formData.get("preferredLocation");
        const noticePeriod = formData.get("noticePeriod");
        const expectedSalary = formData.get("expectedSalary");

        const jobRole = formData.get("jobRole");
        const jobType = formData.get("jobType");

        const resume = formData.get("resume");

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.EMAIL_PASSWORD,
        //     },
        // });

        // Resume Attachment
        let attachments = [];

        if (resume && resume.size > 0) {
            const buffer = Buffer.from(await resume.arrayBuffer());

            attachments.push({
                filename: resume.name,
                content: buffer,
            });
        }

        // Email to HR
        await transporter.verify();
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.HR_EMAIL,
            subject: `New Job Application - ${jobRole}`,

            html: `
            <h2>New Career Application</h2>

            <table border="1" cellpadding="10" cellspacing="0">

                <tr>
                    <td><b>Applied Role</b></td>
                    <td>${jobRole}</td>
                </tr>

                <tr>
                    <td><b>Job Type</b></td>
                    <td>${jobType}</td>
                </tr>

                <tr>
                    <td><b>Full Name</b></td>
                    <td>${fullName}</td>
                </tr>

                <tr>
                    <td><b>Email</b></td>
                    <td>${email}</td>
                </tr>

                <tr>
                    <td><b>Phone</b></td>
                    <td>${phone}</td>
                </tr>

                <tr>
                    <td><b>Location</b></td>
                    <td>${location}</td>
                </tr>

                <tr>
                    <td><b>Experience</b></td>
                    <td>${experience}</td>
                </tr>
                ${experience !== 'Fresher' ?
                    ` 

                <tr>
                    <td><b>Current Job Title</b></td>
                    <td>${currentJobTitle}</td>
                </tr>
                <tr>
                    <td><b>Current Company</b></td>
                    <td>${currentCompany}</td>
                </tr>
                <tr>
                    <td><b>Current CTC</b></td>
                    <td>${currentCTC}</td>
                </tr> `
                    : ""
                }

                <tr>
                    <td><b>Skills</b></td>
                    <td>
                    <ul>
                        ${skills.map(skill => `<li>${skill}</li>`).join("")}
                       </ul>
                       </td>
                </tr>

                <tr>
                    <td><b>Qualification</b></td>
                    <td>${qualification}</td>
                </tr>

                <tr>
                    <td><b>Degree</b></td>
                    <td>${degree}</td>
                </tr>

                <tr>
                    <td><b>College</b></td>
                    <td>${college}</td>
                </tr>

                <tr>
                    <td><b>Certifications</b></td>
                    <td>${certifications}</td>
                </tr>

                <tr>
                    <td><b>Preferred Location</b></td>
                    <td>${preferredLocation}</td>
                </tr>

                <tr>
                    <td><b>Notice Period</b></td>
                    <td>${noticePeriod}</td>
                </tr>

                <tr>
                    <td><b>Expected Salary</b></td>
                    <td>${expectedSalary}</td>
                </tr>

            </table>

            <br/>

            <p><b>Resume:</b> Attached with this email.</p>
            `,

            attachments,
        });

        // Confirmation Email to Applicant

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank you for your application - Pearls IT Hub`,

            html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color:#333; line-height:1.6; max-width:700px; margin:auto;">

            

            <p>Dear <strong>${fullName}</strong>,</p>

            <p>
                Thank you for applying for the
                <strong>${jobRole}</strong> position at
                <strong>Pearls IT Hub</strong>.
                We have successfully received your application and resume.
            </p>

            <p>
                Our hiring team is currently reviewing all applications.
                If your qualifications match our requirements, we will contact
                you within <strong>3–5 business days</strong> to discuss the
                next steps in the recruitment process.
            </p>

            <p>
                We appreciate your interest in joining our team and thank you
                for taking the time to apply.
            </p>

            <br>

            <p>
                Best regards,
            </p>

            <p>
                <strong>HR Team</strong><br/>
                Pearls IT Hub<br/>
                📧 hrpearlsithub@gmail.com<br/>
                🌐 https://pearlsithub.com/
            </p>

        </div>
    `,
        });

        return NextResponse.json({
            success: true,
            message: "Application submitted successfully.",
        });

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send application.",
            },
            { status: 500 }
        );
    }
}