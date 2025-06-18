import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import {
  Paintbrush,
  Package,
  MousePointerClick,
  Type,
  Layers,
  Activity,
  Square,
  Move3D,
  LayoutGrid
} from 'lucide-react'

const tools = [
  {
    path: '/box-styler',
    title: 'Box Styler',
    desc: 'Adjust width, height, border radius, and shadows.',
    Icon: Package,
  },
  {
    path: '/button-styler',
    title: 'Button Styler',
    desc: 'Design and generate styled buttons.',
    Icon: MousePointerClick,
  },
  {
    path: '/font-tweaker',
    title: 'Font Tweaker',
    desc: 'Customize font family, size, weight and spacing.',
    Icon: Type,
  },
  {
    path: '/shadowforge',
    title: 'ShadowForge',
    desc: 'Craft layered shadows with live preview.',
    Icon: Layers,
  },
  {
    path: '/transition-editor',
    title: 'Transition Editor',
    desc: 'Define and preview smooth CSS transitions.',
    Icon: Activity,
  },
  {
    path: '/border-lab',
    title: 'Border Lab',
    desc: 'Tweak borders, outlines, and edge styles.',
    Icon: Square,
  },
  {
    path: '/position-dragger',
    title: 'Position Dragger',
    desc: 'Drag the box freely and copy its position.',
    Icon: Move3D,
  },
  {
    path: '/grid-crafter',
    title: 'Grid Crafter',
    desc: 'Visual builder for CSS Grid layouts.',
    Icon: LayoutGrid,
  },
]

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex items-center justify-center gap-2">
        <Paintbrush className="w-6 h-6 text-primary" />
        <h1 className="text-3xl font-bold">CSS Helper</h1>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tools.map(({ path, title, desc, Icon }) => (
          <Link to={path} key={path}>
            <Card className="hover:shadow-lg transition h-full">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
