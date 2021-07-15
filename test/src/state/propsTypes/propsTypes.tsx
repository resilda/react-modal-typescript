export interface InitialStateProps {
	loading: boolean;
	userData: Array<any>;
	error: null;
	filteredValue: any;
}

interface PostProps {
	id: any;
	title: string;
	body: string;
}

export interface InitialStatePostsProps {
	posts: PostProps
}
