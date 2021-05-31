import type {Middleware} from 'pinecone-router/dist/utils'

const PineconeRouterMiddleware: Middleware = {
	/**
	 * @property {string} version the version of this middleware.
	 */
	version: '0.0.0',
	/**
	 * @property {string} name the name of the middleware.
	 */
	name: 'middleware',
	/**
	 * @property {object} settings the middleware settings.
	 */
	settings: {},

	/**
	 * This will be called at router initialization.
	 * used for detecting router settings.
	 */
	init(component, settings) {
		//load settings
		this.settings = {
			...this.settings,
			...(settings.middlewares?.[this.name] ?? {}),
		};
	},

	/**
	 * Called for each route during initialization,
	 * before the route is processed & added.
	 */
	onBeforeRouteProcessed(el, component, path) {},

	/**
	 * Will be called before the handlers are executed.
	 * during navigation (PineconeRouter.navigate()).
	 * 
	 */
	onBeforeHandlersExecuted(route, path, firstload) {},

	/**
	 * Will be called after the handlers are executed and done.
	 * during navigation (PineconeRouter.navigate()).
	 */
	onHandlersExecuted(route, path, firstload) {},
};

if (window.PineconeRouterMiddlewares == null)
	window.PineconeRouterMiddlewares = [PineconeRouterMiddleware];
else window.PineconeRouterMiddlewares.push(PineconeRouterMiddleware);
