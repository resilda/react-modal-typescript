export interface InitialStateProps {
	loading: boolean;
	userData: Array<any>;
	error: null;
	filteredValue: any;
}

export interface PostProps {
	id: any;
	title: String;
	body: String;
}

export interface InitialStatePostsProps {
	posts: PostProps[]
}
