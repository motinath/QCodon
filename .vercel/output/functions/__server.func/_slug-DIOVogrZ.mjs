import { k as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as getBlogPost } from "./_chunks/blogs-data-B64K1K-s.mjs";
//#region dist/server/assets/_slug-DIOVogrZ.js
var $$splitComponentImporter = () => import("./_slug-oBg_ay_p.mjs");
var $$splitNotFoundComponentImporter = () => import("./_slug-Q6cb04tg.mjs");
var Route = createFileRoute("/blogs/$slug")({
	loader: ({ params }) => {
		if (!getBlogPost(params.slug)) throw notFound();
		return { slug: params.slug };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.slug ? getBlogPost(loaderData.slug) : null;
		if (!p) return { meta: [{ title: "Blog — Quantum Codon" }] };
		return { meta: [
			{ title: `${p.title} — Quantum Codon` },
			{
				name: "description",
				content: p.excerpt
			},
			{
				property: "og:title",
				content: `${p.title} — Quantum Codon`
			},
			{
				property: "og:description",
				content: p.excerpt
			},
			{
				property: "og:image",
				content: p.image
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
