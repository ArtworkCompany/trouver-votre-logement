import React from 'react';

const Home: React.FC = () => {
  return (
    <main>
      <div className="flex">
        <div className="flex items-center flex-1">
          <div className="px-16">
            <h1 className="text-5xl tracking-tight font-medium text-gray-900">
              <span className="block xl:inline">Réduisez vos impôts</span> <span className="block text-indigo-600">grâce à l'immobilier locatif</span>
            </h1>
            <p className="mt-10 mx-auto text-lg text-gray-500">
              Simulez gratuitement votre investissement parmi plus de 10 000 lots, et découvrez votre bien idéal dès 150€ / mois !
            </p>
            <div className="mt-10 flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Voir les biens
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
            alt=""
          />
        </div>
      </div>
      {/* <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Data to enrich your</span> <span className="block text-indigo-600 xl:inline">online business</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div> */}
    </main>
  );
};

export default Home;
