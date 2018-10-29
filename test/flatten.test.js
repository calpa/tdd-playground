/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

const test = require("ava");
const flatten = require("../src/flatten");

test("flatten should be a function", t => {
  t.deepEqual(typeof flatten, "function", "flatten is not a function");
});

test("flatten should do nothing", t => {
  t.deepEqual(flatten([]), []);
  t.deepEqual(flatten([[[[[[[[[[[]]]]]]]]]]]), []);
});

test("flatten should flatten nested arrays:", t => {
  t.deepEqual(flatten(["a", "b", ["c"], "d", ["e"]]), [
    "a",
    "b",
    "c",
    "d",
    "e"
  ]);
});

test("flatten should flatten deeply nested arrays:", t => {
  t.deepEqual(flatten(["a", [[[[[[[["b", [["c"]]]]]], "d", ["e"]]]]]]), [
    "a",
    "b",
    "c",
    "d",
    "e"
  ]);
  t.deepEqual(flatten(["a", "b", ["c"], "d", ["e"]]), [
    "a",
    "b",
    "c",
    "d",
    "e"
  ]);
  t.deepEqual(
    flatten([
      [
        "a",
        [
          "b",
          [
            "k",
            [
              "a",
              [
                "b",
                ["c"],
                [
                  [
                    "a",
                    [
                      [
                        "a",
                        [
                          "b",
                          [
                            "k",
                            [
                              "a",
                              ["b", ["c"]],
                              [
                                "a",
                                ["x", ["c"], ["a", ["x", ["k"]]], ["d", ["z"]]]
                              ],
                              ["d", ["m"]]
                            ],
                            ["d", ["e"]]
                          ]
                        ]
                      ],
                      ["d", ["e"]]
                    ],
                    [
                      "b",
                      [
                        "k",
                        [
                          "a",
                          ["b", ["c"]],
                          [
                            "a",
                            ["x", ["c"], ["a", ["x", ["k"]]], ["d", ["z"]]]
                          ],
                          ["d", ["m"]]
                        ],
                        ["d", ["e"]]
                      ]
                    ]
                  ],
                  ["d", ["e"]]
                ]
              ],
              [
                "a",
                [
                  "x",
                  ["c"],
                  [
                    "a",
                    ["x", ["k"]],
                    [
                      [
                        "a",
                        [
                          "b",
                          [
                            "k",
                            [
                              "a",
                              ["b", ["c"]],
                              [
                                "a",
                                ["x", ["c"], ["a", ["x", ["k"]]], ["d", ["z"]]]
                              ],
                              ["d", ["m"]]
                            ],
                            ["d", ["e"]]
                          ]
                        ]
                      ],
                      ["d", ["e"]]
                    ]
                  ],
                  ["d", ["z"]]
                ]
              ],
              ["d", ["m"]]
            ],
            ["d", ["e"]]
          ]
        ]
      ],
      ["d", ["e"]]
    ]),
    [
      "a",
      "b",
      "k",
      "a",
      "b",
      "c",
      "a",
      "a",
      "b",
      "k",
      "a",
      "b",
      "c",
      "a",
      "x",
      "c",
      "a",
      "x",
      "k",
      "d",
      "z",
      "d",
      "m",
      "d",
      "e",
      "d",
      "e",
      "b",
      "k",
      "a",
      "b",
      "c",
      "a",
      "x",
      "c",
      "a",
      "x",
      "k",
      "d",
      "z",
      "d",
      "m",
      "d",
      "e",
      "d",
      "e",
      "a",
      "x",
      "c",
      "a",
      "x",
      "k",
      "a",
      "b",
      "k",
      "a",
      "b",
      "c",
      "a",
      "x",
      "c",
      "a",
      "x",
      "k",
      "d",
      "z",
      "d",
      "m",
      "d",
      "e",
      "d",
      "e",
      "d",
      "z",
      "d",
      "m",
      "d",
      "e",
      "d",
      "e"
    ]
  );
});
