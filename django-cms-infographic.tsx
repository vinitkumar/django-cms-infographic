"use client"

import { useState } from "react"
import { ChevronRight, Code, GitBranch, GitMerge, GitPullRequest, Layers, Milestone } from "lucide-react"

export default function DjangoCMSVersioningInfographic() {
  const [activeTab, setActiveTab] = useState("timeline")

  return (
    <>

    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
        <h1 className="text-3xl font-bold tracking-tight">Django CMS Version Evolution</h1>
        <p className="mt-2 text-emerald-100">
          The journey from version 3 to version 5.0 and the semantic versioning story
        </p>
      </div>

      <div className="flex border-b">
        <button
          className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === "timeline" ? "border-b-2 border-emerald-600 text-emerald-700" : "text-gray-600"}`}
          onClick={() => setActiveTab("timeline")}
        >
          <Milestone size={18} />
          Version Timeline
        </button>
        <button
          className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === "semver" ? "border-b-2 border-emerald-600 text-emerald-700" : "text-gray-600"}`}
          onClick={() => setActiveTab("semver")}
        >
          <Code size={18} />
          Semantic Versioning
        </button>
        <button
          className={`px-4 py-3 font-medium text-sm flex items-center gap-2 ${activeTab === "compatibility" ? "border-b-2 border-emerald-600 text-emerald-700" : "text-gray-600"}`}
          onClick={() => setActiveTab("compatibility")}
        >
          <Layers size={18} />
          Compatibility Matrix
        </button>
      </div>

      <div className="p-6">
        {activeTab === "timeline" && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Django CMS Version Journey</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

              {/* Version 3 */}
              <div className="relative flex items-start mb-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 z-10">
                  <span className="text-lg font-bold">3.x</span>
                </div>
                <div className="ml-6 pt-2">
                  <h3 className="text-xl font-bold text-gray-800">Django CMS 3.x Series</h3>
                  <p className="mt-2 text-gray-600">
                    The established foundation of django CMS with a mature feature set and widespread adoption.
                  </p>
                  <div className="mt-3 flex items-center text-sm text-emerald-700">
                    <GitBranch size={16} className="mr-1" />
                    <span>Stable branch with long-term support</span>
                  </div>
                </div>
              </div>

                {/* Version 4.1 */}
                <div className="relative flex items-start mb-12">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white z-10">
                  <span className="text-lg font-bold">4.1</span>
                </div>
                <div className="ml-6 pt-2">
                  <h3 className="text-xl font-bold text-gray-800">Django CMS 4.1 Release</h3>
                  <p className="mt-1 text-sm text-emerald-700">Released: December 31, 2023</p>
                  <p className="mt-2 text-gray-600">
                    A major milestone introducing "enterprise-ready" features including a comprehensive content
                    versioning system.
                  </p>
                  <div className="mt-3 flex items-center text-sm text-emerald-700">
                    <GitMerge size={16} className="mr-1" />
                    <span>Culmination of the "version 4" initiative</span>
                  </div>
                </div>
              </div>


              {/* Version 5.0 */}
              <div className="relative flex items-start">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white z-10">
                  <span className="text-lg font-bold">5.0</span>
                </div>
                <div className="ml-6 pt-2">
                  <h3 className="text-xl font-bold text-gray-800">Django CMS 5.0 (Originally planned as Django CMS 4.2)</h3>
                  <p className="mt-1 text-sm text-emerald-700">Coming soon in 2025</p>
                  <p className="mt-2 text-gray-600">
                    Introduces breaking changes including simplified models for improved performance, while maintaining
                    a straightforward upgrade path from 4.1.
                  </p>
                  <div className="mt-3 flex items-center text-sm text-emerald-700">
                    <ChevronRight size={16} className="mr-1" />
                    <span>Signals a commitment to semantic versioning for future releases</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "semver" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Semantic Versioning Explained</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-red-50 to-white p-5 rounded-lg border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <span className="text-xl font-bold">X</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">MAJOR</h3>
                <p className="mt-2 text-gray-600">
                  Increment when you make incompatible API changes that require users to modify their code.
                </p>
                <div className="mt-3 p-2 bg-red-50 rounded text-sm text-red-700">Example: 4.1 → 5.0</div>
              </div>

              <div className="bg-gradient-to-b from-amber-50 to-white p-5 rounded-lg border border-amber-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                  <span className="text-xl font-bold">Y</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">MINOR</h3>
                <p className="mt-2 text-gray-600">
                  Increment when you add functionality in a backward-compatible manner.
                </p>
                <div className="mt-3 p-2 bg-amber-50 rounded text-sm text-amber-700">Example: 3.10 → 3.11</div>
              </div>

              <div className="bg-gradient-to-b from-emerald-50 to-white p-5 rounded-lg border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                  <span className="text-xl font-bold">Z</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">PATCH</h3>
                <p className="mt-2 text-gray-600">Increment when you make backward-compatible bug fixes.</p>
                <div className="mt-3 p-2 bg-emerald-50 rounded text-sm text-emerald-700">Example: 4.1.0 → 4.1.1</div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold text-gray-800">The Django CMS Versioning Dilemma</h3>
              <p className="mt-2 text-gray-600">
                When planning what was initially called "version 4.2", the team faced a challenge:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2 mt-0.5"></span>
                  The update included breaking changes (simplified models for performance)
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2 mt-0.5"></span>
                  Semantic versioning principles dictate a major version bump for breaking changes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 bg-blue-100 rounded-full flex-shrink-0 mr-2 mt-0.5"></span>
                  The community decided to honor semantic versioning and jump to version 5.0
                </li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-blue-100">
                <p className="text-blue-800 font-medium">
                  This decision signals a commitment to clear, predictable versioning for the future, with more frequent
                  major version bumps (6.0, 7.0, etc.) when breaking changes are introduced.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "compatibility" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Compatibility Matrix</h2>
            <p className="text-gray-600">
              Django CMS versions and their compatibility with Python and Django versions. The alignment of major
              version numbers is currently coincidental.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border">
                      django CMS
                    </th>
                    <th
                      colSpan={5}
                      className="py-3 px-4 bg-blue-50 text-center text-xs font-medium text-blue-700 uppercase tracking-wider border"
                    >
                      Python version
                    </th>
                    <th
                      colSpan={5}
                      className="py-3 px-4 bg-emerald-50 text-center text-xs font-medium text-emerald-700 uppercase tracking-wider border"
                    >
                      Django version
                    </th>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 bg-gray-50 border"></th>
                    {/* Python versions */}
                    <th className="py-2 px-3 bg-blue-50 text-center text-xs font-medium text-blue-700 border">3.13</th>
                    <th className="py-2 px-3 bg-blue-50 text-center text-xs font-medium text-blue-700 border">3.12</th>
                    <th className="py-2 px-3 bg-blue-50 text-center text-xs font-medium text-blue-700 border">3.11</th>
                    <th className="py-2 px-3 bg-blue-50 text-center text-xs font-medium text-blue-700 border">3.10</th>
                    <th className="py-2 px-3 bg-blue-50 text-center text-xs font-medium text-blue-700 border">3.9</th>
                    {/* Django versions */}
                    <th className="py-2 px-3 bg-emerald-50 text-center text-xs font-medium text-emerald-700 border">
                      5.2
                    </th>
                    <th className="py-2 px-3 bg-emerald-50 text-center text-xs font-medium text-emerald-700 border">
                      5.1
                    </th>
                    <th className="py-2 px-3 bg-emerald-50 text-center text-xs font-medium text-emerald-700 border">
                      5.0
                    </th>
                    <th className="py-2 px-3 bg-emerald-50 text-center text-xs font-medium text-emerald-700 border">
                      4.1
                    </th>
                    <th className="py-2 px-3 bg-emerald-50 text-center text-xs font-medium text-emerald-700 border">
                      4.0
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Django CMS 5.0.x */}
                  <tr className="bg-gradient-to-r from-emerald-50 to-white">
                    <td className="py-3 px-4 border font-medium text-emerald-700">5.0.x</td>
                    {/* Python compatibility */}
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    {/* Django compatibility */}
                    <td className="py-2 px-3 text-center border font-medium text-emerald-700">LTS</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">×</td>
                    <td className="py-2 px-3 text-center border">×</td>
                  </tr>

                  {/* Django CMS 4.1.x */}
                  <tr>
                    <td className="py-3 px-4 border font-medium">4.1.x</td>
                    {/* Python compatibility */}
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    {/* Django compatibility */}
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border font-medium text-emerald-700">LTS</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                  </tr>

                  {/* Django CMS 3.11.x */}
                  <tr>
                    <td className="py-3 px-4 border font-medium">3.11.x</td>
                    {/* Python compatibility */}
                    <td className="py-2 px-3 text-center border">×</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    {/* Django compatibility */}
                    <td className="py-2 px-3 text-center border">×</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                    <td className="py-2 px-3 text-center border font-medium text-emerald-700">LTS</td>
                    <td className="py-2 px-3 text-center border">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-5 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800">Looking Ahead</h3>
              <p className="mt-2 text-gray-600">
                With the move to version 5.0, django CMS is establishing a clearer versioning strategy:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                  Major version bumps (6.0, 7.0, etc.) will become more common for breaking changes
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>A
                  single point of truth for compatibility of all endorsed packages is in development
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                  Upgrades will remain straightforward with standard Django migrations
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 bg-emerald-100 rounded-full flex-shrink-0 mr-2 mt-1"></span>
                  Django 5.2 was originally planned as Django CMS 4.2
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 border-t text-center text-sm text-gray-500">
        Django CMS Foundation • {new Date().getFullYear()}
      </div>
    </div>
    </>
  )
}

