'use client';

import React from 'react';

export default function FoodShowcase() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-section flex flex-col gap-8">
        <h2 className="text-8xl text-primary text-end">FOOD SHOWCASE</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 grid gap-4">
            <picture className="overflow-hidden rounded-2xl">
              <img className="row-span-2 hover:scale-105 transition-all" src="/image/fs-a.png" alt="" />
            </picture>
            <picture className="overflow-hidden rounded-2xl">
              <img className="rpw-span-1 hover:scale-105 transition-all" src="/image/fs-e.png" alt="" />
            </picture>
          </div>
          <div className="col-span-3 grid grid-row-3 gap-4">
            <div className="row-span-1 grid grid-cols-3 gap-4">
              <picture className="overflow-hidden rounded-2xl">
                <img className="hover:scale-105 transition-all" src="/image/fs-b.png" alt="" />
              </picture>
              <picture className="overflow-hidden rounded-2xl">
                <img className="hover:scale-105 transition-all" src="/image/fs-c.png" alt="" />
              </picture>
              <picture className="overflow-hidden rounded-2xl">
                <img className="hover:scale-105 transition-all" src="/image/fs-d.png" alt="" />
              </picture>
            </div>
            <div className="row-span-2 grid grid-cols-3 gap-4">
              <picture className="col-span-2 overflow-hidden rounded-2xl">
                <img className="hover:scale-105 transition-all" src="/image/fs-f.png" alt="" />
              </picture>
              <div className="col-span-1 grid gap-4">
                <picture className="overflow-hidden rounded-2xl">
                  <img className="hover:scale-105 transition-all" src="/image/fs-g.png" alt="" />
                </picture>
                <picture className="overflow-hidden rounded-2xl">
                  <img className="hover:scale-105 transition-all" src="/image/fs-h.png" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
