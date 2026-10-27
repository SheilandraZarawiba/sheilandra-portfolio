// Path aset yang aman untuk localhost dan subpath GitHub Pages.
export const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, "");
