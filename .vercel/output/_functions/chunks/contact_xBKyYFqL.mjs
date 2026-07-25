import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { Resend } from "resend";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	try {
		const data = await request.formData();
		const firstname = String(data.get("firstname") || "").trim();
		const lastname = String(data.get("lastname") || "").trim();
		const email = String(data.get("email") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (!firstname || !email || !message) return new Response(JSON.stringify({ error: "Champs manquants." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		await new Resend("re_4hNTRzCX_D9WPxbdeyYnDpn4GW87JwtMq").emails.send({
			from: "onboarding@resend.dev",
			to: "initiate.water@gmail.com",
			replyTo: email,
			subject: `Message Initiate – ${firstname} ${lastname}`,
			html: `
        <h2>Nouveau message depuis le site Initiate</h2>
        <p><strong>Nom :</strong> ${firstname} ${lastname}</p>
        <p><strong>Email :</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
		});
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		console.error("Contact API error:", err);
		return new Response(JSON.stringify({ error: "Erreur serveur." }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
