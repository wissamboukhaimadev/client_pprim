export type navigation_labels = "General" | "Etage 1" | "Etage 2" | "Etage 3" | "Amphie"

interface INavigationItems {
    label: navigation_labels
}



export const navigation_items: INavigationItems[] = [
    {
        label: "Amphie"
    },
    {
        label: "General"
    },
    {
        label: "Etage 1"
    },
    {
        label: "Etage 2"
    },
    {
        label: "Etage 3"
    },

]