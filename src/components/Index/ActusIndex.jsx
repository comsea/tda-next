"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ActusIndex() {
  const [isLoadinga, setIsLoadinga] = useState(true);
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    fetch(`https://api.tda-archi.com/api/actualites`)
      .then((response) => response.json())
      .then((result) => {
        const fetchedActualites = result["hydra:member"];
        const sortedActualites = fetchedActualites.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setActualites(sortedActualites);
        setIsLoadinga(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <div className="w-[90%] text-start">
        {/* Titre */}
        <div className="text-4xl lg:text-6xl font-bold mb-10 relative w-full">
          <h2 className="underline decoration-[#DF0624] lg:underline-offset-8 underline-offset-4 lg:decoration-2 decoration-1">
            LES ACTUALITÉS
          </h2>
          <p className="absolute text-[#494949] -z-40 lg:ml-12 ml-4 lg:top-8 top-6">
            LES ACTUALITÉS
          </p>
        </div>

        {/* Grille des actualités */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoadinga ? (
            <p>Chargement en cours...</p>
          ) : (
            actualites.slice(0, 4).map((actualite, index) => (
              <Link href={`/actualites/${actualite.id}`} key={actualite.id}>
                <div className="relative w-full lg:p-12 px-4 py-8 bg-[#242424] flex flex-col justify-start items-start space-y-2 overflow-hidden h-full">
                  {/* Contenu de l'actualité */}
                  <img
                    src={`https://api.tda-archi.com/build/images/${actualite.photo}`}
                    alt="Article"
                    className="w-full h-[250px] object-cover"
                  />
                  <p className="lg:text-base text-sm text-[#BBBBBB]">
                    {new Date(actualite.createdAt).toLocaleString("fr-FR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                  <h4 className="lg:text-3xl text-2xl font-semibold uppercase">
                    {actualite.title}
                  </h4>
                  <p
                    className={`${
                      index === 0 ? "line-clamp-4" : "line-clamp-3"
                    } lg:text-xl text-lg`}
                    dangerouslySetInnerHTML={{ __html: actualite.description }}
                  />

                  {/* Bouton "Voir l'article" toujours en bas à droite */}
                  <div className="absolute flex flex-row bottom-0 right-0 text-black text-xs lg:w-1/2 w-[60%]">
                    <div className="w-1/4 h-[30px] bg-black">
                      <div className="w-full h-full bg-[#242424] rounded-br-3xl"></div>
                    </div>
                    <div className="w-1/2 h-[30px] bg-black text-white rounded-t-xl flex flex-row justify-center items-center">
                      <div className="underline decoration-[#DF0624] underline-offset-4 decoration-2">
                        Voir l'article
                      </div>
                    </div>
                    <div className="w-1/4 h-[30px] bg-black">
                      <div className="w-full h-full bg-[#242424] rounded-bl-3xl"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
