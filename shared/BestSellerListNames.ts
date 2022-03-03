export interface BestSellerListNamesResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: ListName[];
}

export interface ListName {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
}
